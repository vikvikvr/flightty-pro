import React from 'react';

import { AirplaneIcon, CloudIcon } from 'assets';
import './LoadingSpinner.scss';

// **** Pulsating airplane icon ****

function LoadingSpinner(): JSX.Element {
  return (
    <div id="loading-spinner">
      <CloudIcon className="cloud fast" />
      <AirplaneIcon className="airplane-icon" />
      <CloudIcon className="cloud slow" />
    </div>
  );
}

export default LoadingSpinner;
