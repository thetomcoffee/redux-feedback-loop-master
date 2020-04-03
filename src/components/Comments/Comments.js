import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Comments extends Component {
//   state = {
//     newElement: ''
//   }

//   handleElementChange = (event) => {
//     this.setState({
//       newElement: event.target.value,
//     });
//   }

  render() {
    return (
      <div className="Comments">
          <h2>Any comments you want to leave?</h2>
        {/* <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <button onClick={() => this.props.dispatch({ type: 'BUTTON_ONE' })}>Button One</button>
        <button onClick={() => this.props.dispatch({ type: 'BUTTON_TWO' })}>Button Two</button>
        <br />
        <label for="elementInput">Element</label>
        <input type="text" placeholder="Enter Element Here" id="elementInput" onChange={this.handleElementChange} />
        <button onClick={() => this.props.dispatch({ type: 'ADD_ELEMENT', payload: this.state.newElement})}>Add Element</button> */}
      </div>
    );
  }
}

export default withRouter(Comments);
