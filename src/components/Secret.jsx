import React from 'react';
import { Link } from 'react-router-dom';

const boxLoSecret = {
  alignItems: 'center',
  display: 'flex',
  height: '60vh',
  width: '60vw',
  justifyContent: 'center'
};

const Secret = () => (
  <div className={boxLoSecret}>
    <div>
      <h1>Eat less</h1>
      <h1>Breath more</h1>
    </div>
    <div>
      <Link to="/">
        <button type="button">HOME</button>
      </Link>
    </div>
  </div>
);

export default Secret;
