import React from 'react';
import './SideBar.scss';
import { AirplaneIcon, BedIcon, InfoIcon, LuggageIcon } from 'assets/icons';

function SideBar() {
  return (
    <nav className="side-bar">
      <ul>
        <li>
          <AirplaneIcon />
          <p className="link-name">cerca voli</p>
        </li>
        <li>
          <LuggageIcon />
          <p className="link-name">bagagli</p>
        </li>
        <li>
          <BedIcon />
          <p className="link-name">hotel</p>
        </li>
        <li>
          <InfoIcon />
          <p className="link-name">informazioni</p>
        </li>
        <li className="banner">
          <div>banner</div>
        </li>
        <li className="last">
          <div>🤓</div>
          <p className="link-name ">ciao utente</p>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
