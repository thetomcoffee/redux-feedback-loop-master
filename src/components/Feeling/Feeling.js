import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Feeling extends Component {
    state = {
        feelingRating: 0
    }

    handleFeelingChange = (event) => {
        console.log('in handleFeelingChange');
        console.log('event.target.value is:', event.target.value);
        this.setState({
            feelingRating: event.target.value,
        });
        console.log('this.state.feelingRating is:', this.state.feelingRating);
    }

    handleNextClick = (event) => {
        console.log('in handleNextClick');
        if(this.state.feelingRating === 0) {
            console.log('this.state.feelingRating === 0 is true');
            alert('Please enter a number (1-5) for feeling.');
        }
        else {
            console.log('this.state.feelingRating === 0 is false');
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

export default connect()(withRouter(Feeling));
