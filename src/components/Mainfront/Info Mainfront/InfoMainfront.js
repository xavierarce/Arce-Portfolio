import React from "react";
import "./InfoMainfront.css";
import pg1 from "../ICONS/1.png";
import pg2 from "../ICONS/2.png";
import pg3 from "../ICONS/3.png";
import pg5 from "../ICONS/5.png";
import profileImage from "../profile.png";
import Tilt from 'react-parallax-tilt';

const Infomainfront = () => {

  const imageSources = [pg1, pg3, pg5, pg2];

  return (
    <section  id="hero" className="centrado">
      <div id="hero2" className="mainfront container">
        <div className="Texto">
          <h1 className="f1" >
            Hi! I'm   <span className="nalo-words">Xavier Arce</span>
            <br />
            Full Stack Web Developer
            <br />
            Crafting Digital Experiences
          </h1>
          <div className="skills" >
            {imageSources.map((src, index) => (
              <Tilt key={index} className="icons" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                <img alt={`Project-img-${index}`} className="icons" src={src} height={50} style={{ border: '1px solid grey' }} />
              </Tilt>
            ))}
          </div>
        </div>
        <div  style={{height:'60vh', width:'45%'}} className="profile">
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
