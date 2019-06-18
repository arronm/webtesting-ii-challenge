import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Dashboard from '.';

describe('<Dashboard />', () => {
  it('renders without errors', () => {
    render(<Dashboard />);
  });
});
