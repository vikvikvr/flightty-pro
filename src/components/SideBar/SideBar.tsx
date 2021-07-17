import React from 'react';
import './SideBar.scss';

function SideBar() {
  return (
    <nav className="side-bar">
      <ul>
        <li>
          <div>✈</div>
          <p className="link-name">cerca voli</p>
        </li>
        <li>
          <div>🧳</div>
          <p className="link-name">bagagli</p>
        </li>
        <li>
          <div>🛌</div>
          <p className="link-name">hotel</p>
        </li>
        <li>
          <div>ℹ</div>
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
