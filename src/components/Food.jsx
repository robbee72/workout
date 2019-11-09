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
        <h1> One daily 12oz can of soda? </h1>
        <h1> 140 calories </h1>
        <h1>Sugars 39 grams</h1>
        <p>78% of the daily sugar you need.</p>

        <h1>If you just stop drinking soda. </h1>
      </div>
      <div>
        <p>------------------------</p>
        <ul>140 x 7 = 980 calories per week</ul>
        <ul>3.5 weeks to lose 1 pound.</ul>
      </div>
    </div>

    <Link to="/">
      <button type="button">Home</button>
    </Link>
    <Link to="/exercise">
      <button type="button">NEXT</button>
    </Link>
  </div>
);

export default Calories;
