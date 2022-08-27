// import '../../App.css';
import React, { Component } from "react";
import NeutralCatImage from '../Images/cat-placeholder.png'
import HappyCatImage from '../Images/purr-24.png'
import AnnoyedCatImage from '../Images/purr-robot-vacuum-cleaner-1.png'


class Cat extends Component {
    constructor() {
      super();
      this.state = {
          mood: 'neutral',
          rage: 0
      };
    }
  
    loadSprite = () => {
      if (this.state.mood === 'neutral') {
        return NeutralCatImage
      } else if (this.state.mood === 'happy') {
        return HappyCatImage
      } else {
        return AnnoyedCatImage
      }
    };

    checkForLoss = () => {
        if (this.state.rage > 300) {
            this.props.lose() 
            return true;
        }
        return false;
    }

    incRage = (amt) => {
        if (amt > 0) {
            let random = Math.random() * 50
            if (random < 5) {
                this.setState({
                    mood: 'annoyed'
                })
            } else if (random < 35) {
                this.setState({
                    mood: 'neutral'
              })
            } else {
                this.setState({
                    mood: 'happy'
              })
        }
      }
      if (this.state.rage < 0) {
          clearInterval(this.state.rageIntervalId)
          this.setState({
            rage: 0
          })
      } else {
          this.setState((prevState) => {
              return {rage: prevState.rage + amt}
        });
      }
    }

    handleMouseEnter = () => {
        let relaxIntervalId = setInterval(() => {
        }, 10);
        this.setState({ relaxIntervalId: relaxIntervalId}) 
        clearInterval(this.state.relaxIntervalId)
        let scoreIntervalId = setInterval(() => {
                this.props.scorePoints()
        }, 500);
        this.setState({ scoreIntervalId: scoreIntervalId });
        let rageIntervalId = setInterval(() => {
            let isLoss = this.checkForLoss()
            if (isLoss == true) {
                this.setState({
                    mood: 'neutral',
                    rage: 0
                })
                clearInterval(this.state.scoreIntervalId)
                clearInterval(this.state.rageIntervalId)
                return;
            } else {
                if (this.state.mood === 'happy') {
                    this.incRage(10)
                } else if (this.state.mood === 'neutral') {
                    this.incRage(30)
                } else {
                    this.incRage(60)
                }
            }
        }, 750);
        this.setState({ rageIntervalId: rageIntervalId});
    }

    handleMouseLeave = () => {
        clearInterval(this.state.scoreIntervalId)
        clearInterval(this.state.rageIntervalId)
        if (this.state.rage > 0) {
            let relaxIntervalId = setInterval(() => {
                this.incRage(-20)
          } , 200); 
          this.setState({ relaxIntervalId: relaxIntervalId})
        }
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