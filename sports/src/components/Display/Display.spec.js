import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Display from '.';

describe('<Display />', () => {
  it('renders without errors', () => {
    render(<Display />); 
  });

  it('should accept balls and strikes as props', () => {
    const { queryByText } = render(<Display balls={1} strikes={2} />);
    
    expect(queryByText(/balls: 1/i)).toBeTruthy();
    expect(queryByText(/strikes: 2/i)).toBeTruthy();
  });
});
