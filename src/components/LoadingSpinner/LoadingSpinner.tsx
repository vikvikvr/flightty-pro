import React from 'react';

import { AirplaneIcon } from 'assets';
import './LoadingSpinner.scss';

function LoadingSpinner(): JSX.Element {
  return (
    <div id="loading-spinner">
      <AirplaneIcon className="airplane-icon" />
    </div>
  );
}

export default LoadingSpinner;
