import React from "react";
import './Project.css';
import Ecommerce from './ProjectImages/ECommerce.png';
import Tilt from 'react-parallax-tilt';

import ReactJs from './ICONS/React.png'
import Firebase from './ICONS/Firebase.png'
import GraphQL from './ICONS/GraphQL_Logo.png'
import TypeScript from './ICONS/Typescript.png'

import ProjectComponent from './ProjectComponent'
import projectDetails from './projectDetails.js'


const Projects = () => {

  const iconsProjectEC=[ReactJs,Firebase,GraphQL,TypeScript];


  return (
    <section id="projects">
      <div className="container centrado">
        <div className="project-wrapper">
          <h2 className=" section-title ma4" style={{color:'#272341'}}>Projects</h2>

          {/* On Course Porject */}
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
          
          {/* Projects Loop */}
          
          {projectDetails.map((project, index) => (
            <ProjectComponent key={index} {...project} />
          ))}
        </div>
      </div>
    </section>  
  );
};

export default Projects;
