import React from 'react';

const Display = props => {
  return (
    <>
      <h1>Display Component</h1>
      <span>Balls: {props.balls}</span>
      {' '}
      <span>Strikes: {props.strikes}</span>
    </>
  );
}
 
export default Display;
