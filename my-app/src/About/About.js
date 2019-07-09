import React, {Component} from 'react';
import '../index.css';
class About extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">
        <h1>About</h1>
        <p>Website made with React.js</p>
      </div>
    );
  }

}

export default About;
