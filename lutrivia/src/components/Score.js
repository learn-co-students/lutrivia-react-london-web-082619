import React from 'react';

class Score extends React.Component {

    render(){
        return(
            <div>
                Name: {this.props.score.name}
                Score: {this.props.score.score}
            </div>
        )
    }

}

export default Score