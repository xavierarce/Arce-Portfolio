import React from "react";
import "./InfoMainfront.css";
import pg1 from "../ICONS/1.png";
import pg2 from "../ICONS/2.png";
import pg3 from "../ICONS/3.png";
import pg5 from "../ICONS/5.png";
import profileImage from "../profile.png";
import Tilt from 'react-parallax-tilt';

const Infomainfront = () => {
  return (
    <section id="hero" className="centrado">
      <div style={{height:'90vh'}} className="mainfront container">
        <div style={{marginBottom:75,width:'90%'}}>
          <h1 className="f1 red" style={{ color: "#272341" }}>
            Hi! I'm   <span className="nalo-words">Xavier Arce</span>
            <br />
            Full Stack Web Developer
            <br />
            Crafting Digital Experiences
          </h1>
          <div className="skills" >
              <Tilt className="icons" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                <img
                  alt="Project-img"
                  className="icons"
                  src={pg1}
                  height={50}
                />
              </Tilt>
              <Tilt className="icons" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                <img
                  alt="Project-img"
                  className="icons"
                  src={pg3}
                  height={50}
                />
              </Tilt>

              <Tilt className="icons" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                <img
                  alt="Project-img"
                  className="icons"
                  style={{ border: '1px solid grey' }}
                  src={pg5}
                  height={50}
                />
              </Tilt>
              <Tilt className="icons" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                <img
                  alt="Project-img"
                  className="icons"
                  src={pg2}
                  height={50}
                />
              </Tilt>
          </div>
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
        <div  style={{height:'60vh'}} className="profile">
          <img 
                  alt="Profile Pic"
                  className="img-fluid rounded shadow-lg about-img"
                  src={profileImage}
          />
        </div>
    </section>
  );
};

export default Infomainfront;
