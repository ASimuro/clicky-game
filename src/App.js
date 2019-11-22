import React, { Component } from "react";
import Body from "./components/Body";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import matches from "./images.json";
import "./App.css"

let correctGuesses = 0;
let highScore = 0;
let message = "Click an animal start. Click on the same one twice and you lose!";

class App extends Component {
    
  state = {
    matches,
    correctGuesses,
    highScore,
    message
    };

  setClicked = id => {
    const matches = this.state.matches;
    const clicked = matches.filter(match => match.id === id);

    // If the image's clicked value is already true, do actions again
    if (clicked[0].clicked){
      console.log ("Current Score: " + correctGuesses);
      console.log ("High Score: " + highScore);
      correctGuesses = 0;
      message = "You already clicked on this one. "
      for (let i = 0 ; i < matches.length ; i++){
        matches[i].clicked = false;
      }
      this.setState({message});
      this.setState({ correctGuesses });
      this.setState({matches});

        // if clicked = false,
    } 
    else if (correctGuesses < 11) {
      // Set its value to true
      clicked[0].clicked = true;
      // increment correct
      correctGuesses++;
      //display message
      message = "Sweet click, keep going!!";
      if (correctGuesses > highScore){
        highScore = correctGuesses;
        this.setState({ highScore });
      }
      // Shuffle the array to be rendered in a random order
      matches.sort(function(a, b){return 0.5 - Math.random()});
      // Set this.state.matches equal to the new matches array
      this.setState({ matches });
      this.setState({correctGuesses});
      this.setState({message});
    } 
    else {
      // Set its value to true
      clicked[0].clicked = true;
      // restart the guess counter
      correctGuesses = 0;
      //play again
      message = " You won!!! Click an image to start again!";
      highScore = 12;
      this.setState({ highScore });
      for (let i = 0 ; i < matches.length ; i++){
        matches[i].clicked = false;
      }
      // Shuffle the array to be rendered in a random order
      matches.sort(function(i, j){return 0.5 - Math.random()});
      // Set this.state.matches equal to the new matches array
      this.setState({ matches });
      this.setState({correctGuesses});
      this.setState({message});
    }
  };

  render() {
    return (
    <Wrapper>
    <Title>Clicky Game</Title>
      <h3 className="scoreSummary">
      {this.state.message}
      </h3>
      <h3 className="scoreSummary card-header">
        Current Score: {this.state.correctGuesses} 
        <br />
        High Score: {this.state.highScore} 
      </h3>
      <div className="container">
        <div className="row">
        {this.state.matches.map(match => (
        <Body
          setClicked={this.setClicked}
          id={match.id}
          key={match.id}
          image={match.image}
          />))}
      </div>
        </div>
    </Wrapper>
    );
  }
}

export default App;