import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Dashboard from '.';
import { fireEvent } from '@testing-library/react/dist';

describe('<Dashboard />', () => {
  it('should render without errors', () => {
    render(<Dashboard />);
  });

  it('should render an input form for balls and strikes', () => {
    

    const { queryByText } = render(<Dashboard />);
    
    const ball = queryByText(/ball/i);
    expect(ball).toBeTruthy();
    

    const hit = queryByText(/hit/i);
    expect(hit).toBeTruthy();
    
    const strike = queryByText(/strike/i);
    expect(strike).toBeTruthy();

    const foul = queryByText(/foul/i);
    expect(foul).toBeTruthy();
  });

  it('should have buttons that will increment values in lifted state', () => {
    const state = {
      ball: 0,
      hit: 0,
      strike: 0,
      foul: 0,
    };

    const handleIncrement = name => {
      state[name]++;
    };

    const { queryByText } = render(<Dashboard handleIncrement={handleIncrement} />);

    const ball = queryByText(/ball/i);
    fireEvent.click(ball);
    expect(state.ball).toBe(1);

    const hit = queryByText(/hit/i);
    fireEvent.click(hit);
    expect(state.hit).toBe(1);

    const strike = queryByText(/strike/i);
    fireEvent.click(strike);
    expect(state.strike).toBe(1);

    const foul = queryByText(/foul/i);
    fireEvent.click(foul);
    expect(state.foul).toBe(1);
  });  
});
