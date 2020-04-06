import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Supported extends Component {
    state = {
        supportedRating: 0
    }

    handleSupportedChange = (event) => {
        console.log('in handleSupportedChange');
        console.log('event.target.value is:', event.target.value);
        this.setState({
            supportedRating: event.target.value,
        });
        console.log('this.state.supportedRating is:', this.state.supportedRating);
    }

    handleNextClick = (event) => {
        console.log('in handleNextClick');
        if(this.state.supportedRating === 0) {
            console.log('this.state.supportedRating === 0 is true');
            alert('Please enter a number (1-5) for supported.');
        }
        else {
            console.log('this.state.supportedRating === 0 is false');
           this.props.dispatch({ type: 'ADD_SUPPORTED', payload: this.state.supportedRating });
           this.props.history.push('/comments')
        }
    }

  render() {
    return (
      <div className="Supported">
          <h2>How well are you being supported?</h2>
          <label for="supportedInput">Supported:</label>
                <input type="number" placeholder="Enter Supported (1-5) Here" id="supportedInput" onChange={this.handleSupportedChange} />
                <button onClick={this.handleNextClick}>Next</button>
      </div>
    );
  }
}

export default connect()(withRouter(Supported));
