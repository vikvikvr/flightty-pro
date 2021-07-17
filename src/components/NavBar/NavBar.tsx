import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { appLogo } from 'assets';

function NavBar(): JSX.Element {
  return (
    <nav id="app-navbar">
      <Link to="/">
        <img className="app-logo" src={appLogo} alt="app logo" />
      </Link>
      <h1 className="app-name">FlighttyPro</h1>
      <ul className="nav-links">
        <li className="selected">Home</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}

export default NavBar;
