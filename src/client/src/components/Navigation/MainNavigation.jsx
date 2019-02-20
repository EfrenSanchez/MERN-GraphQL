//Dependencies
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

//Context
import AuthContext from '../../context/auth-context';

//Style
import './MainNavigation.css';

const MainNav = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <header className="main-nav">
          <div className="main-nav__logo">
            <NavLink to="/events"><h1>Book a Event</h1></NavLink>
          </div>
          <nav className="main-nav__item">
            <ul>
              {!context.token && (
                <li>
                  <NavLink to="/auth">Authenticate</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              {context.token && (
                <Fragment>
                  <li>
                    <NavLink to="/bookings">Bookings</NavLink>
                  </li>
                  <li>
                  <button onClick={context.logout}>Logout</button>
                  </li>
                </Fragment>
              )}
            </ul>
          </nav>
        </header>
      );
    }}
  </AuthContext.Consumer>
);

export default MainNav;