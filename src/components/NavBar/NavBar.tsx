import React from 'react';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className="app-navbar">
      <button className="menu-button">🍔</button>
      <img
        className="app-logo"
        src="https://cdn.join.com/5e947ff0ac3bd8000100e449/shippy-pro-logo-l.png"
        alt="app logo"
      />
      <h1>FlighttyPro</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}

export default NavBar;
