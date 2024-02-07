import React, { Component } from "react";
import "./Project.css";

import FinishedProjectComponent from "./Project Components/FinishedProjectComponent";
import dataProjects from "./Projects Data/dataProjects.js";

import SearchBox from "./SearchBox";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      finishedProjectsState: [],
      searchField: "",
    };
  }

  componentDidMount() {
    this.setState({ finishedProjectsState: dataProjects });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  filteredProjects = (projects) => {
    return projects.filter((project) => {
      const abilitiesMatch = project.abilities
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());

      return abilitiesMatch;
    });
  };

  render() {
    const { finishedProjectsState } = this.state;

    const filteredFinishedProjects = this.filteredProjects(
      finishedProjectsState
    );

    return (
      <section id="projects">
        <div className="container centrado">
          <div className="project-wrapper">
            <h2 className=" section-title ma4" style={{ color: "#272341" }}>
              Projects
            </h2>
            <SearchBox onSearchChange={this.onSearchChange} />
            {filteredFinishedProjects.map((project, index) => (
              <FinishedProjectComponent key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
