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

  describe('Display', () => {
    it('should update strikes correctly when dashboard button is clicked', () => {
      const { queryByText } = render(<App />);
      const strikeBtn = queryByText(/strike$/i);
      expect(strikeBtn).toBeTruthy();

      const strikeDisplay = queryByText(/strikes: \d/i);
      expect(strikeDisplay).toBeTruthy();

      fireEvent.click(strikeBtn);
      expect(queryByText(/strikes: 1/i)).toBeTruthy();
    });

    it('should update balls correctly when dashboard button is clicked', () => {
      const { queryByText } = render(<App />);
      const ballsBtn = queryByText(/ball$/i);
      expect(ballsBtn).toBeTruthy();

      const ballsDisplay = queryByText(/balls: \d/i);
      expect(ballsDisplay).toBeTruthy();

      fireEvent.click(ballsBtn);
      expect(queryByText(/balls: 1/i)).toBeTruthy();
    });
  });
  
  describe('Count Rules', () => {
    it('should correctly reset balls and strikes at 3 strikes', () => {
      const { queryByText } = render(<App />);
      const strikeBtn = queryByText(/strike$/i);
      expect(strikeBtn).toBeTruthy();
      const ballsBtn = queryByText(/ball$/i);
      expect(strikeBtn).toBeTruthy();

      const strikeDisplay = queryByText(/strikes: \d/i);
      expect(strikeDisplay).toBeTruthy();
      const ballsDisplay = queryByText(/balls: \d/i);
      expect(ballsDisplay).toBeTruthy();
      
      fireEvent.click(ballsBtn);
      fireEvent.click(strikeBtn);
      fireEvent.click(strikeBtn);
      fireEvent.click(strikeBtn);

      expect(queryByText(/balls: 0/i)).toBeTruthy();
      expect(queryByText(/strikes: 0/i)).toBeTruthy();
    });
    it('should correctly reset balls and strikes at 4 balls', () => {
      const { queryByText } = render(<App />);
      const strikeBtn = queryByText(/strike$/i);
      expect(strikeBtn).toBeTruthy();
      const ballsBtn = queryByText(/ball$/i);
      expect(strikeBtn).toBeTruthy();

      const strikeDisplay = queryByText(/strikes: \d/i);
      expect(strikeDisplay).toBeTruthy();
      const ballsDisplay = queryByText(/balls: \d/i);
      expect(ballsDisplay).toBeTruthy();
      
      fireEvent.click(strikeBtn);
      fireEvent.click(ballsBtn);
      fireEvent.click(ballsBtn);
      fireEvent.click(ballsBtn);
      fireEvent.click(ballsBtn);

      expect(queryByText(/balls: 0/i)).toBeTruthy();
      expect(queryByText(/strikes: 0/i)).toBeTruthy();
    });
    it.todo('should correctly reset balls and strikes on a hit');
    it.todo('should increase strikes up to a maximum of two');
  });

//   it('renders Hello World to the screen', () => {
//     const { getByText } = render(<App />);
//     getByText(/hello world/i);
//   });
// });

// describe('Greet Button', () => {
//   it('says hello developers', () => {
//     const { queryByText } = render(<App />);
//     const button = queryByText(/greet/i);
//     fireEvent.click(button);
//     expect(queryByText(/hello developers/i)).toBeTruthy();
//   });
});
