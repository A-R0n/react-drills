import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: [
        "eat",
        "code",
        "relax",
        "exercise",
        "meditate",
        "sleep"
      ]
    }
  }

  render() {
    let myTodoList = this.state.todo.map( (element, index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })

    return (
      <div className="App">
        <ul>
          { myTodoList }
        </ul>
      </div>
    );
  }
}

export default App;
