import React from "react";
import "./InfoMainfront.css";
import ReactJS from "../ICONS/ReactJs.png";
import ReactNative from "../ICONS/ReactNative.png";
import JavaS from "../ICONS/JavaS.png";
import PostSQL from "../ICONS/PostgreSQL.png";
import profileImage from "../profile.png";
import Tilt from 'react-parallax-tilt';

const Infomainfront = () => {

  const imageSources = [ReactJS, JavaS, PostSQL, ReactNative
];

  return (
    <section  id="hero" className="">
      <div id="hero2" className="mainfront container">
        <div className="">
          <h1 className="Texto tl " >
            Hi! I'm   <span className="nalo-words">Xavier Arce</span>
            <br />
            Full Stack Web Developer
            <br />
            Crafting Digital Experiences
          </h1>
          <div className="skills" >
            {imageSources.map((src, index) => (
              <Tilt key={index} className="icons" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                <img alt={`Project-img-${index}`} className="icons" src={src} height={60}/>
              </Tilt>
            ))}
          </div>
        </div>
        <div  className="profile">
          <img 
                alt="Profile Pic"
                className="profile-img "
                src={profileImage}
          />
        </div>
      </div>
      <div className=" KnowMeBttn f3 b shadow-3 pa3 grow centrado">
        <a
          rel="noreferrer"
          className="nalo-words"
          href="#about"
        >
          Get to know me
        </a>
      </div>
    </section>
  );
};

export default Infomainfront;
