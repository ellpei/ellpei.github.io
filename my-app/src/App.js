import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';
import {Link, animateScroll as scroll} from "react-scroll";

class App extends Component {

  constructor(props) {
  super(props);
    this.state = {
      title: "ellpei"
    };
  }


  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Router>
          {/*
            <Route exact path='/' component={Home}/>
            <Route exact path='/About' component={About}/>
            <Route exact path='/Contact' component={Contact}/>
            */}
            <Navbar/>
          </Router>

          <div name="home">
            <Home/>
          </div>
          <div name="about">
            <About/>
          </div>
          <div name="projects">
            <Projects/>
          </div>
          <div name="contact">
            <Contact/>
          </div>



        </header>
      </div>
    )
  }
}

export default App;
