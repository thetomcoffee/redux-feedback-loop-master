import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css'; 
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';


class App extends Component {
  state = {
    newElement: ''
  }

  handleElementChange = (event) => {
    this.setState({
      newElement: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>

      <Router>
        <Route path="/feeling" component={Feeling} />
        <Route path="/supported" component={Supported} />   
        <Route path="/comments" component={Comments} />
        <Route path="/review" component={Review} /> 
      </Router>
        


        {/* Dispatching an action */}
        {/* <button onClick={() => this.props.dispatch({ type: 'BUTTON_ONE' })}>Button One</button>
        <button onClick={() => this.props.dispatch({ type: 'BUTTON_TWO' })}>Button Two</button>
        <br />
        <label for="elementInput">Element</label>
        <input type="text" placeholder="Enter Element Here" id="elementInput" onChange={this.handleElementChange} />
        <button onClick={() => this.props.dispatch({ type: 'ADD_ELEMENT', payload: this.state.newElement})}>Add Element</button> */}
      </div>
    );
  }
}

export default connect()(App);
