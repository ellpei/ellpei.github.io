import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';

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
            <Route exact path='/' component={Home}/>
            <Route exact path='/About' component={About}/>
            <Route exact path='/Contact' component={Contact}/>
            <Navbar/>
        </header>
      </div>
    )
  }
}

export default App;
