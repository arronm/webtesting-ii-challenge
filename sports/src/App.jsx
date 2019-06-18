import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  const [state, setState] = useState({
    greeting: 'Hello World',
    ball: 0,
    strike: 0,
    foul: 0,
    hit: 0,
  });

  // const greetDevelopers = () => {
  //   setState(state => ({
  //     ...state,
  //     greeting: 'Hello Developers',
  //   }));
  // };

  const handleIncrement = (name) => {
    setState(state => ({
      ...state,
      [name]: state[name] + 1,
    }));
  }

  return (
    <div className="App">
      <Dashboard handleIncrement={handleIncrement} />
      <Display balls={state.ball} strikes={state.strike} />
    </div>
  );
}

export default App;
