import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Display from '.';

describe('<Display />', () => {
  it('renders without errors', () => {
    render(<Display />); 
  });
});
