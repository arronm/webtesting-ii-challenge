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

  const handleIncrement = (name) => {
    switch(name) {
      case 'strike': {
        let strike = state.strike >= 2 ? 0 : state.strike + 1;
        let ball = state.strike >= 2 ? 0 : state.ball;
        setState(state => ({
          ...state,
          strike,
          ball,
        }));
        break;
      }
      case 'ball':
        const ball = state.ball >= 3 ? 0 : state.ball + 1;
        const strike = state.ball >= 3 ? 0 : state.strike;
        setState(state => ({
          ...state,
          ball,
          strike,
        }));
        break;
      case 'hit':
        setState(state => ({
          ...state,
          ball: 0,
          strike: 0,
        }));
        break;
      default:
        setState(state => ({
          ...state,
          [name]: state[name] + 1,
        }));
    }
  }

  return (
    <div className="App">
      <Dashboard handleIncrement={handleIncrement} />
      <Display balls={state.ball} strikes={state.strike} />
    </div>
  );
}

export default App;
