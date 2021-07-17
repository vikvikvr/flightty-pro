import React from 'react';
import './LoadingSpinner.scss';
import { AirplaneIcon } from 'assets/icons';

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <AirplaneIcon className="airplane-icon" />
    </div>
  );
}

export default LoadingSpinner;
