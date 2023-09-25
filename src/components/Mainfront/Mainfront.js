import React from "react";
import "./Mainfront.css";

const Mainfront = () => {
  return (
    <section id="hero" className="centrado">
      <div className="container  ">
        <h1 className="f1 red" style={{ color: "#272341" }}>
          Hi! I'm <span className="nalo-words">Xavier Arce</span>
          <br />
          Full Stack Web Developer
          <br />
          Crafting Digital Experiences
        </h1>
        <div className="skills">
          <span className="badge">React.js</span>
          <span className="badge">JavaScript</span>
          <span className="badge">HTML5</span>
          <span className="badge">CSS3</span>
        </div>
        <p className="f3 grow">
          <a
            rel="noreferrer"
            className="f3 b shadow-3 pa3 gorw nalo-words"
            href="#about"
          >
            Get to know me
          </a>
        </p>
      </div>
    </section>
  );
};

export default Mainfront;
