import React from 'react';
import Question from '../components/Question';

const QuestionsContainer = (props) => {

        return(
            <div>
                {props.questions.map(question => <Question question={question} checkAnswer={props.checkAnswer}key={question.text}/>)}
            </div>
        )

}

export default QuestionsContainer