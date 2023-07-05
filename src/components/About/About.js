import React from "react";
import "./About.css";
import profileImage from "./profile.png";
import Resume1 from "./ResumeEspanol.pdf";

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
                Passionate about web development, I have a practical and theoretical foundation in JavaScript, CSS, and HTML.
                With determination and focus, I seek to achieve my goal: obtaining a degree in Software Development and forging a successful career in the technology industry.
                I'll soon be pursuing an informatics degree at ESGI in Toulouse, France, specializing in artificial intelligence, big data, or software and web development.
                My motivation has driven me to participate in additional training to improve my programming skills and experience, and I continue to strive for professional growth.
              </p>
              <p className="f4 white">
                With a drive to excel in the tech industry, I bring strong communication and customer service skills from my previous roles as a salesman and real estate agent.
                Now, my objective is to be part of a dynamic and collaborative team, where I can keep learning and passionately contribute to the development of innovative technological solutions.
              </p>
              <p className="f4 white mt4 mb5">
                Excited to contribute my expertise and expand my horizons, I'm ready to embark on new challenges and innovative projects.
                My dedication, enthusiasm, and perseverance make me a valuable candidate for any project in the technology field.
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
