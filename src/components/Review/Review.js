import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

class Review extends Component {

  saveFeedback(event) {
    console.log('In saveFeedback()');
    //TODO axios PUSH of new feedback 

    //TODO then, show "Thank You" msg, and button to add more feedback
    //maybe reuse Home view for this? 
  }

  render() {
    return (
      <div className="Review">
        <h2>Review Your Feedback</h2>
        <p>Feeling: {this.props.reduxState.feelingReducer.feelingRating}</p>
        <p>Understanding: {this.props.reduxState.understandingReducer.understandingRating}</p>
        <p>Support: {this.props.reduxState.supportedReducer.supportedRating}</p>
        <p>Comments: {this.props.reduxState.commentsReducer.comments}</p>
        <input type="submit" onClick={this.saveFeedback}></input>
      </div>
    );
  }
}

export default connect(putReduxStateOnProps)(withRouter(Review));
