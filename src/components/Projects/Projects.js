import React from "react";
import './Project.css';

// Finished Projects
import FinishedProjectComponent from './Project Components/FinishedProjectComponent'
import FinishedProject from './Projects Data/finishedProjects.js'

//On Course Projects
import OnCourseProjectsComponent from "./Project Components/OnCourseProjectsComponent";
import onCourseProjects from "./Projects Data/onCourseProjects";


const Projects = () => {

  return (
    <section id="projects">
      <div className="container centrado">
        <div className="project-wrapper">
          <h2 className=" section-title ma4" style={{color:'#272341'}}>Projects</h2>

          {/* On Course Porject */} 
          {onCourseProjects.map((project, index) => (
            <OnCourseProjectsComponent key={index} {...project} />
          ))}

          {/*  FInished Projects Loop */}
          
          {FinishedProject.map((project, index) => (
            <FinishedProjectComponent key={index} {...project} />
          ))}
        </div>
      </div>
    </section>  
  );
};

export default Projects;
