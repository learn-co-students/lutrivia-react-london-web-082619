import React from 'react';

class ScoreForm extends React.Component {

    state = {
        name: ""
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        })
        console.log(this.state.name)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addScore(this.state.name, this.props.score)
    }

    render(){
        return(
            <form onChange={this.handleChange} onSubmit={this.handleSubmit} >
                <input type="text" placeholder="Your name..." value={this.state.name}></input>
                <input type="submit" value="Submit score"></input>
            </form>
        )
    }

}

export default ScoreForm