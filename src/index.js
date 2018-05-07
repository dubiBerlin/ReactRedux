import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import Secret from './secret/secret';

import YTSearch from 'youtube-api-search';

const secret = Secret;

YTSearch({ key: secret, term: 'surfboards' }, function(data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
