import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hello, mon application React</h1>
       <p>ma première appli!</p>
       {/* <p>ma première appli dynamique !</p> */}
       <Person />
       {/* <Person />
       <Person /> */}
      </div>
    );
  }
}

export default App;
