var VideoList = () => {
  return (
    <div className="video-list">
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
    </div>
  );
};

//create the render method
  //iterate the first 5 results from exampleVideoData
    // render those elements into videoListEntry react instances 
      //append the results to videoList
  // return the videoList



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


//src/data/exampleVideoData.js