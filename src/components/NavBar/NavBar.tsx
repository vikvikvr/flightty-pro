import React from 'react';
import { Link } from 'react-router-dom';

import { appLogo } from 'assets';
import './NavBar.scss';

// **** Top navigation shared between screens ****

function NavBar(): JSX.Element {
  return (
    <nav id="app-navbar">
      <Link to="/">
        <img className="app-logo" src={appLogo} alt="app logo" />
      </Link>
      <h1 className="app-name">FlighttyPro</h1>
      <ul className="links-container">
        <li className="link">Home</li>
        <li className="link">FAQ</li>
        <li className="link">Logout</li>
      </ul>
    </nav>
  );
}

export default NavBar;
