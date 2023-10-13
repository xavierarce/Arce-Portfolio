import React from "react";
import "./NavBar.css";

const HeaderMainfront = ( {onAboutClick, onMainClick,onProjectClick,onContactClick}) => {

  return (
      <nav>
        <ul className="List">
          <li className="Item">
            <a href="#home" onClick={onMainClick}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={onAboutClick}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={onProjectClick}>Projects</a>
          </li>
          <li style={{ float: "right" }}>
            <a className="active" href="#contact" onClick={onContactClick}>
            Contact
            </a>
          </li>
        </ul>
      </nav>
  );
};

export default HeaderMainfront;
