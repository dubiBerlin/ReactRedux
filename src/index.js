import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";
import Secret from "./secret/secret";

const secret = Secret;

const App = () => {
    return ( < div >
      <
      SearchBar / >
      <
      /div>);
    };

    ReactDOM.render( < App / > , document.querySelector(".container"));