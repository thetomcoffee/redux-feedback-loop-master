import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Comments extends Component {
    state = {
        comments: ''
    }

    handleCommentsChange = (event) => {
        console.log('in handleCommentsChange');
        console.log('event.target.value is:', event.target.value);
        this.setState({
            comments: event.target.value,
        });
        console.log('this.state.comments is:', this.state.comments);
    }

    handleNextClick = (event) => {
        console.log('in handleNextClick');
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments });
        this.props.history.push('/review')

    }

    render() {
        return (
            <div className="Comments">
                <h2>Any comments you want to leave?</h2>
                <textarea placeholder="Enter comments here..." onChange={this.handleCommentsChange} />
                <br />
                <button onClick={this.handleNextClick}>Next</button>
            </div>
        );
    }
}

export default connect()(withRouter(Comments));
