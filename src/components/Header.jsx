import React from 'react';
import { NavLink } from 'react-router-dom';
//TODO  logout redirect to landing page and login
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="header__content">
          <h2 className="header__title"> Do the work . </h2>
          <div>
            <ul>
              <li>
                <NavLink to="/landing" activeClassName="is-active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/fat" activeClassName="is-active">
                  What is human fat?
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="is-active">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="is-active">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/philosphy" activeClassName="is-active">
                  Our View
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
