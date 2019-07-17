import React, {Component} from 'react';
import '../index.css';
import './Projects.css';
import github from './github.png'; 

class Projects extends Component {

  constructor(props) {

    super(props)
    this.state = {selected: null}
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if(this.node.contains(e.target)) {
      //click inside 
      return;
    }

    this.handleClickOutside();
  }

  handleClickOutside = () => {
    //close the infobox
    this.setState({
      selected: null
    })
  }

  expandbox = (section) => {
    if(this.state.selected != section) {
      this.setState({selected: section})
    } else {
    }
  }

  render() {
    return (
      <div className="Projects" ref={node => this.node = node}>
          <h1>Projects</h1>
          <div className="bubble-container">
            <button className="bubble" onClick={() => this.expandbox('development')}>Development</button>
            <button className="bubble" onClick={() => this.expandbox('photography')}>Photography</button>
            <button className="bubble" onClick={() => this.expandbox('artworks')}>Artworks</button>
        </div>
        <div className="infobox">

          {this.state.selected === "development" ? 
            <div className="development">
            <p>Like any other programmer, I like starting new development projects. Finishing them however, is another question. Throughout my years, I have made games, websites, and hydroponic control systems. Many can be found on Github.</p>
            <a href="https://github.com/ellpei" className="github-link"><img src={github} alt="Go to Github" width="30px"/> ellpei</a>
            </div> : null }

          {this.state.selected === "photography" ? 
            <div className="photography">
            <p>
              I am an amateur photographer. Many years ago, I took photography lessons and could spend hours outdoors trying to get the perfect shot. Nowadays, my photography excursions are limited to special events or vacations. Some of my photos can be found <a href="https://500px.com/emelieloulou">here.</a> 
            </p>
            </div> : null }

          {this.state.selected === "artworks" ? 
            <div className="artworks">
            <p>One of my passions include painting with oils or acrylics. It is not the smell of turpentine which gets my creative juices going, but the neverending "final" adjustments that must be made before I can show something to the world. In that way, painting is almost like bug fixing. You fix one error, and several more pop up. If you don't pay attention, you might just create a mess. Sometimes, you make a masterpiece.</p>
            </div> : null }


        </div>
      </div>
    );
  }

}

export default Projects;
