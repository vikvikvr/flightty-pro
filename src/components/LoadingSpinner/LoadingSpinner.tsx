import React from 'react';

import { AirplaneIcon } from 'assets';
import './LoadingSpinner.scss';

// airplane icon that pulsates

function LoadingSpinner(): JSX.Element {
  return (
    <div id="loading-spinner">
      <AirplaneIcon className="airplane-icon" />
    </div>
  );
}

export default LoadingSpinner;
