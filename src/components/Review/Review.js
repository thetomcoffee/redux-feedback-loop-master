import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

class Review extends Component {

  render() {
    return (
      <div className="Review">
          <h2>Review Your Feedback</h2>
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
      </div>
    );
  }
}

export default connect(putReduxStateOnProps)(withRouter(Review));
