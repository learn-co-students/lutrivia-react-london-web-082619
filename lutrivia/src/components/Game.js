import React from 'react';
import QuestionsContainer from '../containers/QuestionsContainer';
import ScoreForm from './ScoreForm'

class Game extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            questions: props.questions,
            questionsRemaining: props.questions.length,
            score: 0
        }
    }

    checkAnswer = (question, answer) => {
        if (question.answer === true && answer === "true"){
            this.increaseScore()
        } else if (question.answer === false && answer === "false"){
            this.increaseScore()
        }
        this.reduceQuestionsRemaining();
        console.log(this.state)
    }

    increaseScore = () => {
        this.setState({
            score: this.state.score + 1
        })
    }

    reduceQuestionsRemaining = () => {
        this.setState({
            questionsRemaining: this.state.questionsRemaining - 1
        })
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <h2> Score: {this.state.score}</h2>
                < QuestionsContainer 
                    questions={this.state.questions} 
                    checkAnswer={this.checkAnswer}/>
                { this.state.questionsRemaining === 0 ? <div> <h3>Game Over! Submit your score? </h3> < ScoreForm addScore={this.props.addScore} score={this.state.score}/></div>  : null}
            </div>
        )
    }

}

export default Game