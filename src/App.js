import './App.css';
import Cat from './Components/Cat.js'
import React, { Component } from "react";
import GameStartScreen from './Components/GameStartScreen.js';
import GameOverScreen from './Components/GameOverScreen.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
        stage: 'startGame',
        points: 0
    };
  }

  scorePoints = () => {
    this.setState((prevState) => {
      return { points: prevState.points + 30}
    })  
  }

  lose = () => {
      this.setState({
        points: 0,
        stage: 'endGame'
      })
  }

  startGame = () => {
    this.setState({
      stage: 'playGame'
    })
  }

  render () {
    if (this.state.stage === 'startGame') {
      return (
        <div className="App">
          <GameStartScreen startGame={this.startGame}/>
        </div>
      );
    } else if (this.state.stage === 'playGame') {
      return (
        <div className="App">
          {/* if game hasn't started yet, load in gamestart screen */}
          <div id="points-counter">{this.state.points}</div>
          <Cat scorePoints={this.scorePoints} lose={this.lose} />
          Illustrations by <a href="https://icons8.com/illustrations/author/eEbrZFlkyZbD">Anna A</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
        </div>
      );
    } else if (this.state.stage === 'endGame') {
      return (
        <div className="App">
          <GameOverScreen startGame={this.startGame}/>
        </div>
      )
    } 
  } 
}

export default App;
