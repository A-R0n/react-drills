import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

    whenWritten(val) {
      this.setState({text: val})
    }

  render() {
    return (
      <div className="App">
        <input type="text"
          onChange={event=> this.whenWritten(event.target.value)}>
        </input> 
        {this.state.text}
      </div>
    );
  }    
}
export default App;
