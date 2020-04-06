import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Home extends Component {

    handleClick = () => {
        this.props.history.push('/feeling')
      } 

    render() {
        return (
            <button onClick={this.handleClick}>Add New Feedback</button>
        )
    }
}

export default withRouter(Home);