import React from 'react';
import './SideBar.scss';
import {
  AirplaneIcon,
  BedIcon,
  InfoIcon,
  LuggageIcon,
  UserIcon,
} from 'assets/icons';
import { bottomBanner } from 'assets/images';

function SideBar() {
  return (
    <nav className="side-bar">
      <ul className="nav-links">
        <li>
          <AirplaneIcon className="link-icon" />
          <p className="link-name">cerca voli</p>
        </li>
        <li>
          <LuggageIcon className="link-icon" />
          <p className="link-name">bagagli</p>
        </li>
        <li>
          <BedIcon className="link-icon" />
          <p className="link-name">hotel</p>
        </li>
        <li>
          <InfoIcon className="link-icon" />
          <p className="link-name">informazioni</p>
        </li>
      </ul>
      <div className="line"></div>
      <div className="bottom-part">
        <div className="banner">
          <img src={bottomBanner} alt="side banner" />
        </div>
        <li className="last">
          <UserIcon className="user-avatar" />
          <p className="link-name ">ciao utente</p>
        </li>
      </div>
    </nav>
  );
}

export default SideBar;
