import React from 'react';

const Dashboard = props => {

  const handleIncrement = (event) => {
    const { name } = event.target;
    props.handleIncrement(name);
  }

  return (
    <>
      <h1>Dashboard Component</h1>
      <input onClick={handleIncrement} type="button" value="Ball" aria-labelledby="ball" name="ball"/>
      <input onClick={handleIncrement} type="button" value="Hit" aria-labelledby="hit" name="hit"/>
      <input onClick={handleIncrement} type="button" value="Strike" aria-labelledby="strike" name="strike"/>
      <input onClick={handleIncrement} type="button" value="Foul" aria-labelledby="foul" name="foul"/>
    </>
  )
}

export default Dashboard;
