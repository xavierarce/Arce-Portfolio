import React from "react";
import './Project.css';
import RoboFriends from './RoboFriends.png';
import LinearGradient from './LinearGradient.png';
import SmartBrain from './SmartBrain.png';
import Ecommerce from './ECommerce.png';
import Tilt from 'react-parallax-tilt';
import ReactJs from './ICONS/React.png'
import Firebase from './ICONS/Firebase.png'
import GraphQL from './ICONS/GraphQL_Logo.png'
import TypeScript from './ICONS/Typescript.png'
import JS from './ICONS/JS.png'
import MySQL from './ICONS/MySQL.png'
import Node from './ICONS/Node.js.png'
import CSS3 from './ICONS/CSS3.png'


const Projects = () => {

  const iconsProjectEC=[ReactJs,Firebase,GraphQL,TypeScript];
  const iconsProjectSB=[JS,ReactJs,MySQL,Node]
  const iconsProjectRF=[JS,ReactJs]
  const iconsProjectLG=[JS,CSS3]



  return (
    <section id="projects">
      <div className="container centrado">
        <div className="project-wrapper">
          <h2 className=" section-title ma4" style={{color:'#272341'}}>Projects</h2>

          {/* New Project */}

          <div className="entire-project">
            <div className="info-project">
              <div className="project-wrapper__text">
                <h3 className="pj-EC">Site E-Commerce</h3>
                <div className="project-text">
                  <p>React, Firebase, Redux Saga, Hooks, GraphQL, TypeScript.</p>
                  <p>Utilisation de Redux pour la gestion de l'état et paiements via Stripe.</p>
                  <p>Progressive Web App (PWA) et tests.</p>
                </div>
                <br/>
                <div className="skills" style={ {marginBottom:40}} >
                  {iconsProjectEC.map((src,index)=>(
                    <Tilt className="icons" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                    <img alt="" className="project-icons-img" src={src}/>
                    </Tilt>
                  ))}
                </div>
                <p rel="noreferrer" target="_blank"  className="seeLive">
                  En Course*
                </p>
              </div>
            </div>
            <div className="photo-project">
                <div alt="aTag" className="">
                  <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <img alt="Project-img" className="photo-inside-img" src={Ecommerce}/>
                  </Tilt>
                </div>
            </div>
          </div>
          
          {/* New Project */}

          <div className="entire-project">
            <div className="info-project">
              <div className="project-wrapper__text">
                <h3 className="pj-SB">SmartBrain</h3>
                <div className="project-text">
                  <p>Front-end developed in React, providing an intuitive and attractive User Interface (UI).</p>
                  <p>Integration of an Image Recognition API for accurate recognition.</p>
                  <p>Back-end implemented with Node.js and Express, including a custom server.</p> 
                  <p>Usage of a database to store information of registered users and faces.</p>
                  <p>Implementation of a secure authentication system to access the application.</p>
                  <br/>
                </div>
                <div className="skills" style={ {marginBottom:40}} >
                  {iconsProjectSB.map((src,index)=>(
                    <Tilt className="icons" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                    <img alt="" className="project-icons-img" src={src}/>
                    </Tilt>
                  ))}
                </div>
                <a rel="noreferrer" target="_blank" href="https://xavierarce.github.io/FACEDETECTOR-APP/" className="seeLive">
                  See Live
                </a>
              </div>
            </div>
            <div className="photo-project">
              <a rel="noreferrer" href="https://xavierarce.github.io/FACEDETECTOR-APP/" target="_blank">
                <div>
                  <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <img
                      alt="Project-img"
                      className="photo-inside-img"
                      src={SmartBrain}
                    />
                  </Tilt>
                </div>
              </a>
            </div>
          </div>
          
          {/* New Project */}

          <div className="entire-project ">
            <div className="info-project">
              <div className="project-wrapper__text">
                <h3 className="pj-RF">RoboFriends</h3>
                <div className="project-text">
                  <p>React Framework: Developed using React, allowing reusable components and efficient state management.</p>
                  <p>Robot Directory: Displays robot cards with names, emails, and avatars.</p>
                  <p>Real-Time Search: Instant search updates robot cards based on the search query.</p>
                  <p>Fetching Data: Simulated data fetching from an external API for state management.</p>
                  <p>Responsive Design: UI adapts seamlessly to different devices.</p>
                  <p>Styling: CSS & Tachyons for a clean and modern appearance.</p>
                </div>
                <br/>
                <div className="skills" style={ {marginBottom:40}} >
                  {iconsProjectRF.map((icon,index)=>(
                    <Tilt className="icons" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                    <img alt="" className="project-icons-img" src={icon} />
                  </Tilt>
                  ))}
                </div>
                  <a rel="noreferrer" target="_blank" href="https://my-friends-cards.netlify.app/" className="seeLive">
                    See Live
                  </a>
              </div>
            </div>
            <div className="photo-project">
                <a rel="noreferrer" href="https://my-friends-cards.netlify.app/" target="_blank">
                  <div>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                      <img alt="Project-img" className="photo-inside-img" src={RoboFriends}/>
                    </Tilt>
                  </div>
                </a>
            </div>
          </div>
          
          {/* New Project */}
          
          <div className="entire-project ">
            <div className="info-project">
              <div className="project-wrapper__text">
              <h3 className="pj-LG">RGB Generator</h3>
                <div  className="project-text">
                  <p>Small experiment.</p>
                  <p>Create random RGB color codes.</p>
                  <p>Using Linear Gradient to style the background</p>
                </div>
                <br/>
                <div className="skills" style={ {marginBottom:40}} >
                  {iconsProjectLG.map((icon,index)=>(
                        <Tilt className="icons" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                        <img alt="" className="project-icons-img" src={icon} />
                      </Tilt>
                  ))}
                </div>
                <a rel="noreferrer" target="_blank" href="https://xavierarce.github.io/Random-Generator/" className="seeLive">
                  See Live
                </a>
              </div>
            </div>
            <div className="photo-project">
                <a rel="noreferrer" href="https://xavierarce.github.io/Random-Generator/" target="_blank">
                  <div>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                      <img alt="Project-img" className="photo-inside-img" src={LinearGradient}/>
                    </Tilt>
                  </div>
                </a>
            </div>
          </div>
          
          {/* <!-- /END Project --> */}
        </div>
      </div>
    </section>  
  );
};

export default Projects;
