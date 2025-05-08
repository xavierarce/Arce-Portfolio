import React, { useEffect, useState } from "react";
import "./Project.css";

import FinishedProjectComponent from "./Project Components/FinishedProjectComponent";
import dataProjects from "./Projects Data/dataProjects.js";

import SearchBox from "./SearchBox";
import { useLanguageContext } from "../../Context/LanguageContext.jsx";

const tradKey = "Projects";

const Projects = () => {
  const [finishedProjectsState, setFinishedProjectsState] = useState([]);
  const [searchField, setSearchField] = useState("");
  const { translate } = useLanguageContext();
  const { writeTrad } = translate(tradKey);

  useEffect(() => {
    setFinishedProjectsState(dataProjects);
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredProjects = finishedProjectsState.filter((project) =>
    project.abilities.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <section id="projects">
      <div className="container centrado">
        <div className="project-wrapper">
          <h2 className="section-title ma4" style={{ color: "#272341" }}>
            {writeTrad("Projects")}
          </h2>
          <SearchBox onSearchChange={onSearchChange} />
          {filteredProjects.map((project, index) => (
            <FinishedProjectComponent key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
