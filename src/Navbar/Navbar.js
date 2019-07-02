import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Navbar">
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Projects'>Portfolio</Link>
        <Link to='/Contact'>Contact</Link>
      </div>
    );
  }

}

export default Navbar;
