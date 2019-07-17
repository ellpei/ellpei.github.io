import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import '../index.css';
import mail from './mail.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';


class Contact extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">
        <h1>Contact me</h1>
        <div className="icon-container">
          <a href="mailto:loulou.pei@hotmail.com"><img src={mail} alt="email" width="50px"/></a>
          <a href="https://www.linkedin.com/in/loulou-pei-523648155/"><img src={linkedin} alt="linkedin" width="50px"/></a>
          <a href="https://www.instagram.com/emelieloulou/?hl=en"><img src={instagram} alt="instagram" width="50px"/></a>

        </div>
      </div>
    );
  }

}

export default Contact;
