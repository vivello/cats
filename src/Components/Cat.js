// import '../../App.css';
import React, { Component } from "react";
import NeutralCatImage from '../Images/cat-placeholder.png'


class Cat extends Component {
    constructor() {
      super();
      this.state = {
          mood: 'neutral'
      };
    }
  
    loadSprite = () => {
      if (this.state.mood === 'neutral') {
        return NeutralCatImage
      }
    };

    handleMouseEnter = () => {
        let scoreIntervalId = setInterval(() => {
            this.props.scorePoints()
        }, 500);
        this.setState({ scoreIntervalId: scoreIntervalId })
    }

    handleMouseLeave = () => {
        clearInterval(this.state.scoreIntervalId)
    }
    
  
    render() {
      return (
        <div>
            <img onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} src={this.loadSprite()} alt={`cat sprite, whose mood is now ${this.state.mood}`}></img>
        </div>
      );
    }
  }
  
  
  export default Cat