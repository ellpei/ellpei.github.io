import React, {Component} from 'react';
import './Navbar.css';
import {Link, animateScroll as scroll} from "react-scroll";

class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="Navbar" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item"><Link activeClass="active" to='home' spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
            <li className="nav-item"><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
            <li className="nav-item"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></li>
          </ul>
          <div className="go-top-btn" onClick={this.scrollToTop}>&#8963;</div>

        </div>
      </nav>
    );
  }

}

export default Navbar;
