import './App.css';
import Cat from './Components/Cat.js'
import React, { Component } from "react";


class App extends Component {
  constructor() {
    super();
    this.state = {
        points: 0
    };
  }

  scorePoints = (e) => {
    e.preventDefault()
    this.setState((prevState) => {
      return { points: prevState.points + 30}
    })  
  }

  render () {
    return (
      <div className="App">
        <div id="points-counter">{this.state.points}</div>
        <Cat />
        Illustrations by <a href="https://icons8.com/illustrations/author/eEbrZFlkyZbD">Anna A</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
      </div>
      
    );
  } 
}

export default App;
