var VideoList = (props) => {

  for (let i = 0; i < props.videos.length; i++) {
    let listItem = props.videos[i];
    window['video' + i] = (<VideoListEntry entryClicked={props.entryClicked} videos={listItem} />);
  }
 
  

  var list = (
    <div className="video-list">
      <div>{video0}</div>
      <div>{video1}</div>
      <div>{video2}</div>
      <div>{video3}</div>
      <div>{video4}</div>
    </div>
  );    

  return list;   
};

//create the render method
  //iterate the first 5 results from exampleVideoData
    // render those elements into videoListEntry react instances 
      //append the results to videoList
  // return the videoList


//line 5 VideoListEntry entryClicked function is passed down from App to the VideoListEntry



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


//src/data/exampleVideoData.js