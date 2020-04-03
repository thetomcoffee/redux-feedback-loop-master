import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        {/* Dispatching an action */}
        <button onClick={() => this.props.dispatch({ type: 'BUTTON_ONE' })}>Button One</button>
        <button onClick={() => this.props.dispatch({ type: 'BUTTON_TWO' })}>Button Two</button>
        <button onClick={() => this.props.dispatch({ type: 'ADD_ELEMENT', payload: 'hydrogen'})}>Add Element</button>
      </div>
    );
  }
}

export default connect()(App);
