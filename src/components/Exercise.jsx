import React from 'react';
import { Link } from 'react-router-dom';
import jcmro from '../images/jcmro.jpg';
import './Exercise.css';

const Exercise = () => (
  <div className="content-container">
    <div className="card">
      <div className="cardContent">
        <h1>Jay Cutler 4x Mr. Olympic</h1>
        <img className="jcPic" src={jcmro} alt="fatcell" />
        <h1>Half of the equation</h1>
        <p>
          3,500 calories in 1 lb of fat. 700 calories in 1 lb of muscle The body
          is an efficient machine. It will store the excess you eat. And it will
          reduce the muscles if you don't use them.
        </p>
      </div>
      <div>
        <p>Walking 1 mile burns 100 calories. At 20 minute pace per mile.</p>
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

export default Exercise;
