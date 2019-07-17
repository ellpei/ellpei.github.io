import React, {Component} from 'react';
import './Navbar.css';
import {Link, animateScroll as scroll} from "react-scroll";

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      home: true,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }


  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      //visible: visible
    });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  toggleTopBtn = () => {
    if(this.state.showTopBtn) {
      this.setState({
        showTopBtn: false
      });
    } else {
      this.setState({
        showTopBtn: true
      });
    }
  }

  render() {
    return (
      <div className="Navbar">
      <nav className={ (this.state.visible ? "top-navbar" : "top-navbar-hidden")} id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item"><Link activeClass="active" to='home' spy={true} smooth={true} offset={-70} duration={500} onSetActive={this.toggleTopBtn} onSetInactive={this.toggleTopBtn}>Home</Link></li>
            <li className="nav-item"><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
            <li className="nav-item"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></li>
          </ul>

        </div>
      </nav>

      { this.state.showTopBtn ? null: <div className="go-top-btn" onClick={this.scrollToTop}>&#8963;</div>}
      </div>
    );
  }

}

export default Navbar;
