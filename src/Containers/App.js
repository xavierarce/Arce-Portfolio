import { useState } from "react";

import NavBar from "../Components/NavBar/NavBar";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";
import Projects from '../Components/Projects/Projects'
import Contact from '../Components/Contact/Contact'

import "./App.css";

const Pages = ["About", "Home", "Projects", "Contact"];
  
function App() {
  const [page, setPage] = useState("Home");

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const clickHandlers = Pages.reduce((handlers, page) => {
    handlers[`on${page}Click`] = () => handlePageChange(page);
    return handlers;
  }, {});

  return (
    <div className="App">
      <NavBar {...clickHandlers} />
      <div className="contentApp">
        {page === "Home" ? (
          <Home />
        ) : page === "About" ? (
          <About />
        ) : page === "Projects" ? (
          <Projects />
        ) : page === "Contact" ? (
          <Contact/>
        ) : (
          <Home /> // Add a fallback component or handle the case where page doesn't match any condition
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
