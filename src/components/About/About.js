import React from "react";
import "./About.css";
import profileImage from "./profile.png";
import Resume1 from "./Xavier Arce CV 25-09.pdf";

const About = () => {
  return (
    <section id="about" className="about-section nalo">
      <div className="container centrado">
        <h2 className="section-title white">ABOUT ME</h2>
        <div className="about-container">
          <div className="about-img-container">
            <div className="about-wrapper__image load-hidden">
              <img
                alt="Profile Pic"
                className="img-fluid rounded shadow-lg about-img"
                src={profileImage}
              />
            </div>
          </div>
          <div className="about-content">
            <div className="tl">
              <p className="f4 white">
                I'm a passionate web developer with a strong foundation in JavaScript, React, and CSS. 
                My focus is on pursuing an informatics degree at ESGI in Toulouse, France.
                Specializing in Web development and Cybersecurity.
                I've honed my skills, especially in React.js, allowing me to create dynamic and responsive web interfaces efficiently.
              </p>
              <p className="f4 white">
              In addition to my technical prowess, I'm multilingual, fluent in Spanish and English, enhancing my ability to collaborate across diverse teams.
              With previous experience in sales and real estate, I bring strong communication and customer service skills to the tech industry.
              </p>
              <p className="f4 white mt4 mb5">
              Eager to contribute my expertise, I'm excited to take on new challenges and innovative projects.
              My dedication, proficiency in React.js, and multilingual capabilities make me a valuable asset in the technology field.
              </p>
              <span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="f6 link dim ba bw1 ph3 pv2 mb2 dib white"
                  href={Resume1}
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
      </div>
    </section>
  );
};

export default About;
