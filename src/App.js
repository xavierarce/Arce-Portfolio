import "./App.css";
import React, { useState } from "react";
import Mainfront from "./components/Mainfront/InfoMainfront";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar.js";
import Contact from "./components/Contact/Contact";
import "tachyons";

const App = () => {
  const [page, setPage] = useState("Main");

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const onAboutClick = () => handlePageChange("About");
  const onMainClick = () => handlePageChange("Main");
  const onProjectClick = () => handlePageChange("Projects");
  const onContactClick = () => handlePageChange("Contact");

  return (
    <div className="App">
      <NavBar
        onAboutClick={onAboutClick}
        onMainClick={onMainClick}
        onProjectClick={onProjectClick}
        onContactClick={onContactClick}
      />
      <div className="contentApp">
      {page === "Main" ? (
        <Mainfront onAboutClick={onAboutClick} />
      ) : page === "About" ? (
        <About />
      ) : page === "Projects" ? (
        <Projects />
      ) : page === "Contact" ? (
        <Contact />
      ) : (
        <Mainfront /> // Add a fallback component or handle the case where page doesn't match any condition
      )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
