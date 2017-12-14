var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
      </div>
      <div className="col-md-5">
      </div>
    </div>

    <VideoPlayer videoObject={{
      kind: 'youtube#searchResult',
      etag: 'abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY',
      id: {
        kind: 'youtube#video',
        videoId: '4ZAEBxGipoA'
      },
      snippet: {
        publishedAt: '2015-08-02T20:52:58.000Z',
        channelId: 'UCJbPGzawDH1njbqV-D5HqKw',
        title: 'React JS Tutorial for Beginners - 1 - Introduction',
        description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'thenewboston',
        liveBroadcastContent: 'none'
      }
    }} />
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
