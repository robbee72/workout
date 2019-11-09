import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import fatcell from '../images/fatcell.jpg';
import './fat.css';

const FatPage = () => (
  <div className="box-lo">
    <div className="content__content">
      <div className="card">
        <div className="card__content">
          <div className="card__front">
            <h3 className="card__title">Human Fat Cell.</h3>
            <p className="card__subtitle">Looks Simple.</p>
            <img className="card__pic" src={fatcell} alt="fatcell" />
          </div>
          <div className="card__back">
            <h2>Molecular formula: </h2>
            <div className="card__backtext">
              C<sub>55</sub>H<sub>104</sub>O<sub>6</sub>
            </div>
          </div>
        </div>
        <NavLink to="/" />

        <Link to="/theCell">
          <button type="button">What is fat? </button>
        </Link>
      </div>
    </div>
  </div>
);

export default FatPage;
