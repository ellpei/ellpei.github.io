import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import '../index.css';

class Contact extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">
        <h1>Contact me</h1>
        <p>ellpei@kth.se</p>
      </div>
    );
  }

}

export default Contact;
