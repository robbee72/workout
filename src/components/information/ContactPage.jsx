import React from 'react';
import { NavLink } from 'react-router-dom';

const contactTitle = {
  color: '#0d5df3',
  textAlign: 'center',
  textDecoration: 'none',
  margin: '0 0 0'
};

const contentContainer = {
  margin: '0 auto',
  padding: '0 1.6rem',
  maxWidth: '100rem',
  backgroundColor: '#5781FF'
};

const headerContent = {
  justifyContent: 'space-between',
  padding: '1.2rem 0'
};

const ContactPage = () => (
  <div className="box-lo">
    <div className="content__content">
      <div className={contentContainer}>
        <div className={headerContent}>
          <NavLink to="/" />
          <h1 className={contactTitle}> Call us! (888) 555-1234 </h1>

          <NavLink to="/about" />
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
