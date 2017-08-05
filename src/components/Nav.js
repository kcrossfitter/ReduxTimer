import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const activeStyle = {
  fontWeight: 'bold'
};

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">Timer App</Link>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                activeStyle={activeStyle}
                exact
                to="/"
              >
                Timer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                activeStyle={activeStyle}
                to="/countdown"
              >
                Countdown
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav my-2 mr-sm-2">
            <li className="nav-item" style={{fontWeight: 'bold'}}>
              <span style={{color: 'white'}}>Created by </span>
              <a href="https://github.com/kcrossfitter">
                Kcrossfitter
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
