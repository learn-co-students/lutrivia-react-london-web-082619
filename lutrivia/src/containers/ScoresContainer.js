import React from 'react';
import Score from '../components/Score'

const ScoresContainer = (props) => {

        return(
            <div> {props.scores.map(score => <Score score={score} /> )} </div>  
        )

}

export default ScoresContainer