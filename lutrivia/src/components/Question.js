import React from 'react';

class Question extends React.Component {

    state = {

    }

    handleClick = event => {
        let guess = event.target.id;
        this.props.checkAnswer(this.props.question, guess)
    }

    render(){
        return(
            <div>
                <p>{this.props.question.text}</p>
                <button id="true" onClick={this.handleClick}>True</button>
                <button id="false" onClick={this.handleClick}>False</button>
            </div>
        )
    }

}

export default Question