import React, { Component } from "react";


class GameStartScreen extends Component {
    constructor() {
      super();
      this.state = {
      };
    }
  
    handleClick = (e) => {
        e.preventDefault()
        this.props.startGame()
    }
    
    render() {
      return (
        <div>
            <span>Would you like to play?</span>
            <button onClick={this.handleClick}>Play game</button>
        </div>
      );
    }
  }
  
  
  export default GameStartScreen