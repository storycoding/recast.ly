class VideoListEntry extends React.Component {
  
  constructor (props) {
    //console.log('VideoListEntry.props = ', props);
    super(props);
  }

  render (props) {
    //var videoPlayer = this.props.videoPlayer;
    //var iframe = this.props.iframe;
    var thumbnail = this.props.videos.snippet.thumbnails.default.url;
    var description = this.props.videos.snippet.description;
    var title = this.props.videos.snippet.title;

    var videoListElement = (
      <div className="video-list-entry media">
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
  }

}




// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoListEntry.propTypes = {
//   video: React.PropTypes.object.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
