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
    outs: 0,
    inning: 1,
  });

  const handleIncrement = (name) => {
    switch(name) {
      case 'strike': {
        const strike = state.strike >= 2 ? 0 : state.strike + 1;
        const ball = state.strike >= 2 ? 0 : state.ball;
        const outs = state.strike >= 2 ? state.outs + 1 : state.outs;
        const inning = Math.floor(outs / 6) + 1;
        setState(state => ({
          ...state,
          inning,
          outs,
          strike,
          ball,
        }));
        break;
      }
      case 'ball': {
        const ball = state.ball >= 3 ? 0 : state.ball + 1;
        const strike = state.ball >= 3 ? 0 : state.strike;
        setState(state => ({
          ...state,
          ball,
          strike,
        }));
        break;
      }
      case 'hit': {
        setState(state => ({
          ...state,
          ball: 0,
          strike: 0,
        }));
        break;
      }
      case 'foul': {
        let strike = state.strike < 2 ? state.strike + 1 : state.strike;
        setState(state => ({
          ...state,
          strike,
        }));
        break;
      }
      default: {
        setState(state => ({
          ...state,
          [name]: state[name] + 1,
        }));
      }
    }
  }

  return (
    <div className="App">
      <Dashboard handleIncrement={handleIncrement} />
      <Display balls={state.ball} strikes={state.strike} />
      <div>Outs: {state.outs}</div>
      <div>Inning: {state.inning}</div>
    </div>
  );
}

export default App;
