import React from "react";
import "./About.css";
// import profileImage from "./profile.png";
import Prix from "./Files About/Prix.png";
import ResumeFR from "./Files About/Xavier Arce FR 04-10.pdf";

const About = () => {
  return (
    <section id="about" className="about-section nalo">
      <div className=" centrado">
        <h2 className="section-title-about white phone">ABOUT ME</h2>
        <div className="about-container">
          <div className="about-img-container">
            <div className="about-img-inside">
              <img
                alt="Profile Pic"
                className="about-img"
                src={Prix}
              />
                <p style={{border: "2px solid black",padding: "0.8rem ",fontWeight: 700, marginBottom:0}}>
                A Proud Third Place Finish in the Hackathon Challenge</p>
                <div style={{border:"2px solid black",borderTop:"none"}}>
                  <p> Mobile App prototype whit React Native</p>
                  <p>
                    Projet React Native avec API Twitter et ChatGPT. 
                    Développement front-end, intégration d'API, logique d'application.
                    Lauréat du Troisième Prix en hackathon.</p>
                </div>
            </div>
          </div>
          <div className="about-content tj">
        <h2 className="section-title-about white pc">ABOUT ME</h2>
            <p className="f4 white">
              I'm a passionate web developer with a strong foundation in JavaScript, React, and CSS. 
              My focus is on pursuing an informatics degree at ESGI in Toulouse, France.
              Specializing in Web development and Cybersecurity.
              I've honed my skills, especially in React.js, allowing me to create dynamic and responsive web interfaces efficiently.
              <br/>
              <br/>
              In addition to my technical prowess, I'm multilingual, fluent in Spanish and English, enhancing my ability to collaborate across diverse teams.
              With previous experience in sales and real estate, I bring strong communication and customer service skills to the tech industry.
              <br/>
              <br/>
              Eager to contribute my expertise, I'm excited to take on new challenges and innovative projects.
              My dedication, proficiency in React.js, and multilingual capabilities make me a valuable asset in the technology field.
            </p>
            <span className="pt3"> 
              <a
                rel="noreferrer"
                target="_blank"
                className="f6 link white"
                href={ResumeFR}
                style={{
                  border: "2px solid #fff",
                  padding: "0.8rem 1.6rem",
                  fontWeight: 700,
                }}
              >
                Check Resume
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
