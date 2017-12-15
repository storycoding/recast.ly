class App extends React.Component {
  
  constructor () {
    //console.log('VideoListEntry.props = ', props);
    super();

    this.state = {
      'currentVideo': window.exampleVideoData[1]
    };
  }
  //
  onChildChanged () { //also consider input
    //this.setState({ checked: newState }); // adjust this to our case
    entryClicked(props.video);
  }
  //


  entryClicked (videoObject) {
    console.dir(this);
    this.setState({currentVideo: videoObject});
  }
  
  render () {
    
    var appDiv = (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search keywords />
          </div>
        </nav>

        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList
              onChildChanged={this.onChildChanged}
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
