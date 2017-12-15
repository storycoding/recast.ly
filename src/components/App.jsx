class App extends React.Component {
  
  constructor () {
    super();

    this.state = {
      'currentVideo': window.exampleVideoData[1],
      'currentDataSet': window.exampleVideoData,
      'currentKeywords': 'cats and cucumbers'
    };
  }
  
  newSearchRequest (userInputData) {
    this.state.currentKeywords = userInputData; // this.setState({currentKeywords: userInputData});
    console.log('new search triggered');
    this.refreshVideoList();
  }

  entryClicked (videoObject) {
    this.setState({currentVideo: videoObject});
  }

  refreshVideoList () {
    
    console.log('refreshVideoList called');
    
    var context = this;

    var data = $.ajax({
  
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',

      data: {'maxResults': '5',
        'part': 'snippet',
        'q': context.state.currentDataSet,
        'type': 'video',
        'key': YOUTUBE_API_KEY,
        'videoEmbeddable': true
      },

      error: function() { console.log('goddamn!'); },

    }).done(function(data) {
      console.log('data is ready');
      console.dir(data);
      return data;
    });

    console.log('this = ');
    console.dir(this);
    this.setState({currentDataSet: data});
  }
   
  
  render () {
    
    var appDiv = (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search newSearchRequest={this.newSearchRequest.bind(this)} />
          </div>
        </nav>

        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList
              entryClicked={this.entryClicked.bind(this)}
              videos={window.exampleVideoData} />
          </div>
        </div>

      
      </div>
    );

    return appDiv;
  }

  
}
//line 33 the entryClicked function needs to be bound to the top level instance of App

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
