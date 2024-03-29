var VideoListEntry = (props) => {

  var thumbnail = props.video.snippet.thumbnails.default.url;
  var description = props.video.snippet.description;
  var title = props.video.snippet.title;  

  //this onclick
    //take the current object
      //execute entryClicked with this object

  var videoListElement = (
    <div onClick={function() { props.entryClicked(props.video); }} className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={thumbnail} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{title}</div>
        <div className="video-list-entry-detail">{description}</div>
      </div>
    </div>
  );

  return videoListElement;

};

//line 16 this.entryClicked is passed down from the App level through videoList
// the click function must listen from the bottom level and send info to the top

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
