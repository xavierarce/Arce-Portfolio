import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          className="box alternate"
          onChange={this.props.onSearchChange}
          placeholder="..."
        />
      </div>
    );
  }
}

export default SearchBox;
