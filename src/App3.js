import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person2';

class App extends Component {
  state = {
    persons: [
      { name: 'Victor Hugo', age: 78},
      { name: 'Mbappé', age: 21},
      { name: 'Patrick Bruel', age: 60},
    ]
  }

  switchNameHandler = () => {
    console.log('bouton cliqué');
    // this.state.persons[0].nom = 'Voltaire'; //NE FONCTIONNE PAS CAR NE LANCE PAS UN RELOAD
    this.setState({
      persons: [
        { name: 'Voltaire', age: 78},
        { name: 'Mbappé', age: 21},
        { name: 'Patrick Bruel', age: 65},
      ]
    });
  }

  render() {
    return (
      <div className="App">
       <h1>Hello, mon application React</h1>
       <p>ma première appli!</p>
       {/* génère un reload du composant */}
       <button onClick={this.switchNameHandler}>Changer de nom</button> 
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >Mon sport préfèré: Foot</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
