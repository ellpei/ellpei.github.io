import React, {Component} from 'react';
import '../index.css';
class About extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">
        <h1>&lt;Hello/&gt;</h1>
        <p>I am a computer science student at KTH Royal Institute of Technology. I am currently residing in Stockholm, Sweden. On my free time I like working on various projects or work as a teaching assistant at KTH, mainly teaching Python and C. I realized I found my passion when I started programming 3 years ago. I have always valued creative freedom and logic in problem solving. "What if there aren't any problems to solve?" you may ask. Well, programming may just as well be used to create more problems than we had before, and that is the beauty of it.</p>
      </div>
    );
  }

}

export default About;
