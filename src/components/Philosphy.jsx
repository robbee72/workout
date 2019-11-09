import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import forrestGrump from '../images/forrestGrump.jpg';

const Philosphy = () => (
  <div className="box-lo">
    <div className="content__content">
      <NavLink to="/" />
      <div>You gotta move</div>
      <img src={forrestGrump} alt="logo" />
    </div>
    <div>
      <Link to="/">
        <button type="button">HOME</button>
      </Link>
    </div>
    <div>
      <Link to="/secret">The Secret to losing Fat....</Link>
    </div>
  </div>
);

export default Philosphy;
