import React from "react";
import ReactJS from "./ICONS/ReactJs.png";
import ReactNative from "./ICONS/ReactNative.png";
import JavaS from "./ICONS/JavaS.png";
import PostSQL from "./ICONS/PostgreSQL.png";
import profileImage from "./ICONS/profile.png";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

import './Home.css'

const Home = () => {
  const imageSources = [ReactJS, JavaS, PostSQL, ReactNative];

  return (
    <section id="hero">
      <div id="hero2" className="mainfront">
        <div className="">
          <h1 className="Texto">
            Hi! I'm <span className="nalo-words">Xavier Arce</span>
            <br />
            Full Stack Web Developer
            <br />
            Crafting Digital Experiences
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
      <div className="KnowMeBttn grow centrado">
        <Link to='about'       >
          Get to know me
        </Link>
      </div>
    </section>
  );
};

export default Home;
