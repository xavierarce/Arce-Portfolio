import React, { Component } from "react";
import './SearchBox.css'

class SearchBox extends Component{
  render(){
    return(
      <div>      
            <input
              type="search"
              className="box alternate"
              onChange={this.onSearchChange}
              placeholder="Search Abilities"
            />
      </div>
    )
  }
}


export default SearchBox