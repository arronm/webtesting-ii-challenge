import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [state, setState] = useState({
    greeting: 'Hello World',
    ball: 0,
    strike: 0,
    foul: 0,
    hit: 0,
  });

  const greetDevelopers = () => {
    setState(state => ({
      ...state,
      greeting: 'Hello Developers',
    }));
  };

  const handleIncrement = (name) => {
    setState(state => ({
      ...state,
      [name]: state[name] + 1,
    }));
  }

  return (
    <div className="App">
      <Dashboard handleIncrement={handleIncrement} />
      TEST: {state.ball}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>{state.greeting}</h1>
      <input type="button" value="Greet" onClick={greetDevelopers} />
    </div>
  );
}

export default App;
