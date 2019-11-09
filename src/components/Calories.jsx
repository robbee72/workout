import React from 'react';
import { Link } from 'react-router-dom';

const contentContainer = {
  margin: '0 auto',
  padding: '0 1.2rem',
  maxWidth: '100rem'
};

const card = {
  width: '15em'
};

const cardContent = {
  textAlign: 'center',
  position: 'relative',
  padding: '10em 5em',
  transition: 'transform 3s',

  transformStyle: 'preserve-3d'
};

const Calories = () => (
  <div className={contentContainer}>
    <div className={card}>
      <div className={cardContent}>
        <h1> How many calories in a pound?</h1>
        <h1> Approximately 3,500 calories </h1>
        <h1>
          {' '}
          The average adult would need to lose or reduce 500 calories per day to
          lose a pound per week.
        </h1>
      </div>
      <div>
        <p>------------------------</p>
        <ul>Maybe the more important issue is what kind of calories!! </ul>
      </div>
    </div>

    <Link to="/">
      <button type="button">Home</button>
    </Link>
    <Link to="/Food">
      <button type="button">NEXT</button>
    </Link>
  </div>
);

export default Calories;
