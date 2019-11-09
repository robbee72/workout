import React from 'react';
import { NavLink } from 'react-router-dom';

const aboutTitle = {
  color: '#f30d0d',
  textAlign: 'center',
  textDecoration: 'none',
  margin: '0 0 0'
};

const contentContainer = {
  margin: '0 auto',

  maxWidth: '100rem',
  backgroundColor: '#5781FF'
};

const AboutPage = () => (
  <div className="box-lo">
    <div className="content__content">
      <div className={contentContainer}>
        <NavLink to="/" />
        <h1 className={aboutTitle}> We do it! </h1>
      </div>
    </div>
  </div>
);

export default AboutPage;
