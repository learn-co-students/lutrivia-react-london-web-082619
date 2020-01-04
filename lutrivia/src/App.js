import React from 'react';
import './index.css';
import data from './data'
import Game from './components/Game'
import ScoresContainer from './containers/ScoresContainer';

class App extends React.Component {

  state = {
    questions: data.questions,
    scores: [],
    gameInProgress: true
  }

  startNewGame = () => {
    this.setState({
      gameInProgress: !this.state.gameInProgress
    })
  }

  addScore = (playerName, score) => {
    this.setState({
      scores: [
        ...this.state.scores, 
        {
          name: playerName,
          score: score
        }
      ]
    })
  }

  render(){
    console.log(this.state.questions)
    return(
      <div>
        <h1>Lutrivia</h1>
        <button onClick={() => this.startNewGame()}>New Game</button>
        {this.state.gameInProgress ? <Game addScore={this.addScore} questions={this.state.questions.slice(0,4)}/> : null }
        < ScoresContainer scores={this.state.scores}/>
      </div>
   
    )
  }

}
  

export default App;
