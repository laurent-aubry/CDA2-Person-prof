import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person2';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hello, mon application React</h1>
       <p>ma première appli!</p>
       <Person name="Victor Hugo" age="78" />
       <Person name="MBappé" age="21" >Mon sport préfèré: Foot</Person>
       <Person name="Patrick Bruel" age="60" />
      </div>
    );
  }
}

export default App;
