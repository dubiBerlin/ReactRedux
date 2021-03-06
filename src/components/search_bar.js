import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "Starting value" };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          onFocus={event => this.setState({ term: " " })}
        />
        <div className="abstand">Searchvalue: {this.state.term}</div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term: term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
