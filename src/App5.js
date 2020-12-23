import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person4";

class App extends Component {
  state = {
    persons: [
      { name: "Victor Hugo", age: 78 },
      { name: "Mbappé", age: 21 },
      { name: "Patrick Bruel", age: 60 },
    ],
  };

  switchNameHandler = (newName) => {
    console.log("bouton cliqué");
    // this.state.persons[0].nom = 'Voltaire'; //NE FONCTIONNE PAS CAR NE LANCE PAS UN RELOAD
    this.setState({
      persons: [
        { name: newName, age: 78 },
        { name: "Mbappé", age: 21 },
        { name: "Patrick Bruel", age: 65 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
       <h1>Hello, mon application React</h1>
       <p>ma première appli!</p>
        {/* Préconiser Bind car la fonction peut engendrer de render en série non contrôlés */}
        {/* <button onClick={this.switchNameHandler.bind(this, 'Voltaire')}>Changer de nom</button> // */} 
        <button onClick={() => this.switchNameHandler('Voltaire!')}>Changer de nom</button> 
        {/* génère un reload du composant */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Rousseau')}
          >
          Mon sport préfèré: Foot
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
