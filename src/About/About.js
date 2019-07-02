import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';

class About extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="About">
        <Navbar />
        <h1>About</h1>
      </div>
    );
  }

}

export default About;
