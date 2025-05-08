import React from "react";
import ReactJS from "./ICONS/React.png";
import JavaS from "./ICONS/JavaS.png";
import PostSQL from "./ICONS/PostgreSQL.png";
import profileImage from "./ICONS/profile.png";
import MongoDB from "./ICONS/MongoDB.png";
import NodeExpress from "./ICONS/NodeExpress.png";
import NodeJs from "./ICONS/Node.js.png";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

import "./Home.css";
import { useLanguageContext } from "../../Context/LanguageContext";

const tradKey = "Home";

const Home = () => {
  const { translate } = useLanguageContext();
  const imageSources = [MongoDB, ReactJS, NodeExpress, NodeJs, PostSQL, JavaS];
  const { writeTrad } = translate(tradKey);

  return (
    <section id="hero">
      <div id="hero2" className="mainfront">
        <div className="">
          <h1 className="Texto">
            {writeTrad("hey_i_am")}
            <span className="nalo-words">Xavier Arce</span>
            <br />
            {writeTrad("full_stack_web_developer")}
          </h1>
          <div className="skills-mainfront">
            {imageSources.map((src, index) => (
              <Tilt
                key={index}
                className="icons"
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
              >
                <img
                  alt={`Project-img-${index}`}
                  className="icons"
                  src={src}
                  height={60}
                />
              </Tilt>
            ))}
          </div>
        </div>
        <div className="profile">
          <img alt="Profile Pic" className="profile-img " src={profileImage} />
        </div>
      </div>
      <div className="homebuttons-container">
        <Link to="projects" style={{ textDecoration: "none" }}>
          <div className="KnowMeBttn grow centrado nalo-words">
            {writeTrad("discover_my_projects")}
          </div>
        </Link>
        <Link to="about" style={{ textDecoration: "none" }}>
          <div className="KnowMeBttn grow centrado nalo-words">
            {writeTrad("about_me")}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
