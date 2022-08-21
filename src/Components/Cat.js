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

    
    
  
    render() {
      return (
        <div>
            <img src={this.loadSprite()} alt={`cat sprite, whose mood is now ${this.state.mood}`}></img>
        </div>
      );
    }
  }
  
  
  export default Cat