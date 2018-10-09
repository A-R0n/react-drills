import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      aStringThatStartsOutAsEmptyUntilChanged: "",
      team: [
        "Aaron Rodgers",
        "Davante Adams",
        "Geronimo Allison",
        "Saquon Barkley",
        "James Conner",
        "Jimmy Graham",
        "Leonard Fournette",
        "Mason Crosby",
        "Greg Zeurlein",
        "Jacksonville DEF"

      ]
    }
  }

  handleChange( whatImTyping ) { //what i am typing will be passed through this function
    this.setState({ aStringThatStartsOutAsEmptyUntilChanged: whatImTyping}) //that will set the typed in as a value within the this.state object with key of aStringThatStartsOutAsEmptyUntilChanged
  }

  render() {
    let myTeam = this.state.team.filter( (element, index) => {
      return element.includes(this.state.aStringThatStartsOutAsEmptyUntilChanged);
    }).map( (element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    console.log(myTeam);
    return (
      <div className="App">
        <input type="text" onChange={e=> this.handleChange(e.target.value)} />
        {myTeam}

        {this.state.aStringThatStartsOutAsEmptyUntilChanged}
      </div>
    );
  }
}

export default App;
