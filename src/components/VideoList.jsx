class VideoList extends React.Component {

  constructor (props) {
    super(props);
  }

  render (props) {
    
    console.log('this = ' + this);

    for (var i = 1; i <= 5; i++) {
      let listItem = this.props.videoArray[i];
      this['video' + i] = (<VideoListEntry videoArrayObject={listItem} />);
    }
   

    var list = (
      <div className="video-list">
        <div>{this.video1}</div>
        <div>{this.video2}</div>
        <div>{this.video3}</div>
        <div>{this.video4}</div>
        <div>{this.video5}</div>
      </div>
    );    

    return list;   
  }
  
}
  





//create the render method
  //iterate the first 5 results from exampleVideoData
    // render those elements into videoListEntry react instances 
      //append the results to videoList
  // return the videoList



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


//src/data/exampleVideoData.js