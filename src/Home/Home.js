import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <Navbar />
        <h1>Hello</h1>
      </div>
    );
  }

}

export default Home;
