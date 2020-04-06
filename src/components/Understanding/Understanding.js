import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Understanding extends Component {
    state = {
        understandingRating: 0
    }

    handleUndstandingChange = (event) => {
        console.log('in handleUnderstandingChange');
        console.log('event.target.value is:', event.target.value);
        this.setState({
            understandingRating: event.target.value,
        });
        console.log('this.state.understandingRating is:', this.state.understandingRating);
    }

    handleNextClick = (event) => {
        console.log('in handleNextClick');
        if(this.state.understandingRating === 0) {
            console.log('this.state.understandingRating === 0 is true');
            alert('Please enter a number (1-5) for understanding.');
        }
        else {
            console.log('this.state.understandingRating === 0 is false');
           this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understandingRating });
           this.props.history.push('/supported')
        }
    }

  render() {
    return (
      <div className="Understanding">
          <h2>How well are you understanding the content?</h2>
          <label for="understandingInput">Feeling:</label>
                <input type="number" placeholder="Enter Understanding (1-5) Here" id="understandingInput" onChange={this.handleUndstandingChange} />
                <button onClick={this.handleNextClick}>Next</button>
      </div>
    );
  }
}

export default connect()(withRouter(Understanding));
