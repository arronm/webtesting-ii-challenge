import React from 'react';

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard Component</h1>
      <input type="button" value="Ball" aria-labelledby="ball" name="ball"/>
      <input type="button" value="Hit" aria-labelledby="hit" name="hit"/>
      <input type="button" value="Strike" aria-labelledby="strike" name="strike"/>
      <input type="button" value="Foul" aria-labelledby="foul" name="foul"/>
    </>
  )
}

export default Dashboard;
