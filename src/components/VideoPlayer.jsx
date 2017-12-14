class VideoPlayer extends React.Component {
  
  constructor (props) {
    super(props);
  }

  render (props) {
    //var videoPlayer = this.props.videoPlayer;
    //var iframe = this.props.iframe;
    var thumbnail = this.props.video.snippet.thumbnails.default.url;
    var videoId = 'https://www.youtube.com/embed/' + this.props.video.id.videoId;
    var description = this.props.video.snippet.description;
    var title = this.props.video.snippet.title;

    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={videoId} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{title}</h3>
          <div>{description}</div>
        </div>
      </div>
    );
  }

}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
