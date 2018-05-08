import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import Secret from './secret/secret';
import VideoList from './components/video_list';

import YTSearch from 'youtube-api-search';

const secret = Secret;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: secret, term: 'Lomachenko' }, videos => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
