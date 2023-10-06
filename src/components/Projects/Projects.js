import React, { Component } from "react";
import './Project.css';

// Finished Projects
import FinishedProjectComponent from './Project Components/FinishedProjectComponent'
import FinishedProjects from './Projects Data/finishedProjects.js'

//On Course Projects
import OnCourseProjectsComponent from "./Project Components/OnCourseProjectsComponent";
import onCourseProjects from "./Projects Data/onCourseProjects";
import SearchBox from "./SearchBox";


class Projects extends Component{
  constructor(){
    super();
    this.state={
      finishedProjectsState:[],
      unFinishedProjectsState:[],
      searchField:'',
    }
  }

  componentDidMount(){
    this.setState({unFinishedProjectsState:onCourseProjects})
    this.setState({finishedProjectsState:FinishedProjects})
  }

  onSearchChange=(event)=>{
    this.setState({searchField:event.target.value})
  }

  filteredProjects = (projects) => {
    return projects.filter((project) => {
      const titleMatch = project.title.toLowerCase().includes(this.state.searchField.toLowerCase());
      const abilitiesMatch = project.abilities.toLowerCase().includes(this.state.searchField.toLowerCase());
      const descriptionMatch = project.description.some((desc) =>
        desc.toLowerCase().includes(this.state.searchField.toLowerCase())
      );
    
      return titleMatch || abilitiesMatch || descriptionMatch;
    })}


  render(){
    const {unFinishedProjectsState,finishedProjectsState} = this.state

    const filteredOnCourseProjects = this.filteredProjects(unFinishedProjectsState)

    const filteredFinishedProjects = this.filteredProjects(finishedProjectsState)
    

    return (
      <section id="projects">
        <div className="container centrado">
          <div className="project-wrapper">
            <h2 className=" section-title ma4" style={{color:'#272341'}}>Projects</h2>
            <SearchBox onSearchChange={this.onSearchChange}/>
            {/* On Course Porject */} 
            {filteredOnCourseProjects.map((project, index) => (
              <OnCourseProjectsComponent key={index} {...project} />
            ))}
            {/*  FInished Projects Loop */}
            {filteredFinishedProjects.map((project, index) => (
              <FinishedProjectComponent key={index} {...project} />
            ))}
          </div>
        </div>
      </section>  
    );
  }
};

export default Projects;
