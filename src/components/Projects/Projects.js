import React from "react";
import './Project.css';
import RoboFriends from './RoboFriends.png';
import LinearGradient from './LinearGradient.png';
import SmartBrain from './SmartBrain.png';
import Tilt from 'react-parallax-tilt';


const Projects = () => {
  return (
    <section id="projects">
      <div className="container centrado">
        <div className="project-wrapper">
          <h2 className=" section-title ma4" style={{color:'#272341'}}>Projects</h2>
         
          {/* <!-- Notice: each .row ma4  vh-100 flex justify-left items-center tl is a project --> */}

          <div className="row ma4   flex justify-left items-center tl">
            <div className="w-100 w-40-ns  h-100 pr3-ns order-1">
              <div className="project-wrapper__text load-hidden">
                <h3 className="pj-SB f2" style={{display:'inline-block'}}>SmartBrain</h3>
                <div>
                  <p className="mb-4 lh-copy">
                  Front-end developed in React, providing an intuitive and attractive User Interface (UI).
                  <br/>
                  Integration of an Image Recognition API for accurate recognition.
                  <br/>
                  Back-end implemented with Node.js and Express, including a custom server.
                  <br/>
                  Usage of a database to store information of registered users and faces.
                  <br/>
                  Implementation of a secure authentication system to access the application.
                    
                  </p>
                </div>
                <h6>Still in production*</h6>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="#projects"
                  className="f6 link dim ba bw3 ph3 pv2 mb2 black"
                  style={{
                    border: '2px solid black',
                    padding: '0.8rem 1.6rem',
                    fontWeight: 700,
                  }}
                >
                  See Live
                </a>
                {/* <a
                  rel="noreferrer"
                  target="_blank"
                  className="f6 link dim ba bw3 ph3 pv2 mb2 black"
                  style={{
                    border: '2px solid black',
                    padding: '0.8rem 1.6rem',
                    fontWeight: 700,
                  }}
                  href="#projects"
                >
                  Source Code
                </a> */}
              </div>
            </div>
            <div className="w-100 w-60-ns pl3-ns order-2">
              <div className="">
                <a rel="noreferrer" href="#!" target="_blank">
                  <div>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                      <img
                        alt="Project-img"
                        className=""
                        src={SmartBrain}
                      />
                    </Tilt>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
         
          {/* <!-- Notice: each .row ma4  vh-100 flex justify-left items-center tl is a project --> */}

          <div className="row ma4   flex justify-left items-center tl">
            <div className="w-100 w-40-ns  h-100 pr3-ns order-1">
              <div className="project-wrapper__text load-hidden">
                <h3 className="pj-RF f2" style={{display:'inline-block'}}>RoboFriends</h3>
                <div>
                  <p className="mb-4 lh-copy">
                    React Framework: Developed using React, allowing reusable components and efficient state management.
                    <br/>
                    Robot Directory: Displays robot cards with names, emails, and avatars.
                    <br/>
                    Real-Time Search: Instant search updates robot cards based on the search query.
                    <br/>
                    Fetching Data: Simulated data fetching from an external API for state management.
                    <br/>
                    Responsive Design: UI adapts seamlessly to different devices.
                    <br/>
                    Styling: CSS & Tachyons for a clean and modern appearance.
                  </p>
                </div>
                <br/>

                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://my-friends-cards.netlify.app/"
                  className="f6 link dim ba bw3 ph3 pv2 mb2 black"
                  style={{
                    border: '2px solid black',
                    padding: '0.8rem 1.6rem',
                    fontWeight: 700,
                  }}
                >
                  See Live
                </a>
                {/* <a
                  rel="noreferrer"
                  target="_blank"
                  className="f6 link dim ba bw3 ph3 pv2 mb2 black"
                  style={{
                    border: '2px solid black',
                    padding: '0.8rem 1.6rem',
                    fontWeight: 700,
                  }}
                  href="google.com"
                >
                  Source Code
                </a> */}
              </div>
            </div>
            <div className="w-100 w-60-ns pl3-ns order-2">
              <div className="project-wrapper__image load-hidden">
                <a rel="noreferrer" href="https://my-friends-cards.netlify.app/" target="_blank">
                  <div>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                      <img
                        alt="Project-img"
                        className=""
                        src={RoboFriends}
                      />
                    </Tilt>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* <!-- Notice: each .row ma4  vh-100 flex justify-left items-center tl is a project --> */}

          <div className="row ma4   flex justify-left items-center tl">
            <div className="w-100 w-40-ns  h-100 pr3-ns order-1">
              <div className="project-wrapper__text load-hidden">
              <h3 className="f2 pj-LG" style={{display:'inline-block'}}>RGB Generator</h3>
                <div>
                  <p className="mb-4">
                    Small experiment.
                    <br/>
                    Create random RGB color codes.
                    <br/>
                    Using Linear Gradient to style the background
                  </p>
                </div>
                <br/>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://xavierarce.github.io/Random-Generator/"
                  className="f6 link dim ba bw3 ph3 pv2 mb2 black"
                  style={{
                    border: '2px solid black',
                    padding: '0.8rem 1.6rem',
                    fontWeight: 700,
                  }}
                >
                  See Live
                </a>
                {/* <a
                  rel="noreferrer"
                  target="_blank"
                  className="f6 link dim ba bw3 ph3 pv2 mb2 black"
                  style={{
                    border: '2px solid black',
                    padding: '0.8rem 1.6rem',
                    fontWeight: 700,
                  }}
                  href="https://github.com/xavierarce/Random-Generator.git"
                >
                  Source Code
                </a> */}
              </div>
            </div>
            <div className="w-100 w-60-ns pl3-ns order-2">
              <div className="project-wrapper__image load-hidden">
                <a rel="noreferrer" href="https://xavierarce.github.io/Random-Generator/" target="_blank">
                  <div>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                      <img
                        alt="Project-img"
                        className=""
                        src={LinearGradient}
                      />
                    </Tilt>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* <!-- /END Project --> */}
        </div>
      </div>
    </section>  
  );
};

export default Projects;