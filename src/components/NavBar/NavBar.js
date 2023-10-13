import React from "react";
// import { animateScroll as scroll } from "react-scroll";
import "./NavBar.css";

const HeaderMainfront = ( {onAboutClick, onMainClick,onProjectClick,onContactClick}) => {
  // const handleScrollToBottom = () => {
  //   scroll.scrollToBottom({
  //     duration: 1000, // Scroll duration in milliseconds
  //     smooth: "easeInOutQuart", // Scroll easing function
  //   });
  // };

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
