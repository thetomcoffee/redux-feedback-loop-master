import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Feeling extends Component {
    state = {
        feelingRating: 0
    }

    handleFeelingChange = (event) => {
        this.setState({
            feelingRating: event.target.value,
        });
    }

    handleNextClick = (event) => {
        if(this.state.feelingRating === 0) {
            alert('Please enter a number (1-5) for feeling.');
        }
        else {
           this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feelingRating });
           this.props.history.push('/understanding')
        }
    }

    render() {
        return (
            <div className="Feeling">
                <h2>How are you feeling today?</h2>

                <label for="feelingInput">Feeling:</label>
                <input type="number" placeholder="Enter Feeling (1-5) Here" id="feelingInput" onChange={this.handleFeelingChange} />
                <button onClick={this.handleNextClick}>Next</button>
            </div>
        );
    }
}

export default withRouter(Feeling);
