import './App.css';
import { Component } from 'react';
import Mainfront from './components/Mainfront/Mainfront';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import 'tachyons'

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Mainfront/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
