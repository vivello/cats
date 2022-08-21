import React, { Component } from "react";


class GameOverScreen extends Component {
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
            <div>You lose!</div>
            <div>Would you like to try again?</div>
            <button onClick={this.handleClick}>Play game</button>
        </div>
      );
    }
  }
  
  
  export default GameOverScreen