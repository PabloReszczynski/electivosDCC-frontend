import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Electivo from './components/Electivo.jsx';

const comm1 = {
  txt: "buena metodologia pero para personas que ya saben programar",
  votes: {
    up: 1,
    down: 0
  }
}

const comm2 = {
  txt: "las tareas pueden tomar tiempo",
  votes: {
    up: 0,
    down: 0
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Electivo name="Taller de Progra" comments={[comm1, comm2]} />
      </div>
    );
  }
}

export default App;
