import React from "react";
import "./About.css";
// import profileImage from "./profile.png";
import Prix from "./Files About/Prix.png";
import ResumeFR from "./Files About/Xavier Arce FR 04-10.pdf";
import TimeLine from "./TimeLine/TimeLine";

const About = () => {
  return (
    <section id="about" className="hero about-section nalo">
      <div className="contenedor-TotalAbout centrado">
        <h2 className="section-title-about white phone">ABOUT ME</h2>
        <div>
          <div className="about-container">
            <div className="about-img-container">
              <div className="about-img-inside">
                <img alt="Profile Pic" className="about-img" src={Prix} />
                <p
                  style={{
                    border: "2px solid black",
                    padding: "0.8rem ",
                    fontWeight: 700,
                    marginBottom: 0,
                  }}
                >
                  A Proud Third Place Finish in the Hackathon Challenge
                </p>
                <div style={{ border: "2px solid black", borderTop: "none" }}>
                  <p> Mobile App prototype whit React Native</p>
                  <p> 
                    Projet React Native avec API Twitter et ChatGPT.
                    Développement front-end, intégration d'API, logique
                    d'application. Lauréat du Troisième Prix en hackathon.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-content tj">
              <h2 className="section-title-about white pc ">ABOUT ME</h2>
              <p className="f4 white">
                Hey there! 👋 I'm a devoted web developer currently on an
                exciting journey to earn my informatics degree at ESGI in the
                vibrant city of Toulouse, France. My heart beats in code,
                particularly in the realms of{" "}
                <strong style={{ color: "black" }}>
                  {" "}
                  JavaScript, React, and CSS.
                </strong>
                <br />
                <br />
                Despite officially being in my first year at ESGI, my love
                affair with web development started way before that. For over a
                year, I immersed myself in the world of JavaScript, dedicating
                countless hours to mastering the art of React. I've gone beyond
                the basics, diving into projects involving{" "}
                <strong style={{ color: "black" }}>
                  {" "}
                  React, MySQL, Node.js,
                </strong>{" "}
                and even dancing with{" "}
                <strong style={{ color: "black" }}> databases.</strong>
                <br />
                <br />
                Originating from the beautiful land of Ecuador, I'm now
                embracing life as a foreign student in Toulouse. Languages?
                Well, I'm a linguistic enthusiast. Fluent in{" "}
                <strong style={{ color: "black" }}>Spanish</strong> and{" "}
                <strong style={{ color: "black" }}>English</strong>, notions in{" "}
                <strong style={{ color: "black" }}>Russians</strong>, with a
                growing fluency in{" "}
                <strong style={{ color: "black" }}>French</strong>—because,
                let's face it, coding languages aren't the only ones worth
                conquering.
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
            {/* Second Part */}
            <TimeLine/>
          
            {/* End Second Part */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
