import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";
import Secret from "./secret/secret";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

import YTSearch from "youtube-api-search";

const secret = Secret;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: secret, term: "react redux" }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={video =>
            this.setState({
              selectedVideo: video
            })
          }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
