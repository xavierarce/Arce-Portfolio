import React from "react";
import "./Mainfront.css";

const Mainfront = () => {
  return (
    <section id="hero" className="centrado">
      <div className="container  ">
        <h1 className="f1 red" style={{ color: "#272341" }}>
          Hi! I'm <span className="nalo-words">Xavier Arce</span>
          <br />
          Developer
          <br />
          Welcome to my Portfolio!
        </h1>
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
