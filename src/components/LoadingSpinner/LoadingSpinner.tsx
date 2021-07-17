import React from 'react';
import './LoadingSpinner.scss';
import { AirplaneIcon } from 'assets';

function LoadingSpinner(): JSX.Element {
  return (
    <div id="loading-spinner">
      <AirplaneIcon className="airplane-icon" />
    </div>
  );
}

export default LoadingSpinner;
