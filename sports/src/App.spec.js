import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import App from './App';
import { fireEvent } from '@testing-library/react/dist';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without errors', () => {
    render(<App />);
  });

  it('renders Hello World to the screen', () => {
    const { getByText } = render(<App />);
    getByText(/hello world/i);
  });
});

describe('Greet Button', () => {
  it('says hello developers', () => {
    const { queryByText } = render(<App />);
    const button = queryByText(/greet/i);
    fireEvent.click(button);
    expect(queryByText(/hello developers/i)).toBeTruthy();
  });
});
