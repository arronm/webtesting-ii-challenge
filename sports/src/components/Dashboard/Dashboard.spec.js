import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Dashboard from '.';

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
});
