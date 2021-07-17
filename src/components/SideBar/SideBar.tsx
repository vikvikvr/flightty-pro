import React from 'react';

import {
  AirplaneIcon,
  BedIcon,
  InfoIcon,
  LuggageIcon,
  UserIcon,
  bottomBanner,
} from 'assets';
import './SideBar.scss';

function SideBar(): JSX.Element {
  return (
    <nav id="side-bar">
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
      <div className="horizontal-line"></div>
      <div className="bottom-part">
        <div className="banner">
          <img src={bottomBanner} alt="side banner" />
        </div>
        <li className="avatar-container">
          <UserIcon className="user-avatar" />
          <p className="link-name ">Ciao, Utente!</p>
        </li>
      </div>
    </nav>
  );
}

export default SideBar;
