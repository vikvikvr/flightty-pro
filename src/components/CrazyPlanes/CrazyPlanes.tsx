import React from 'react';
import './CrazyPlanes.scss';
import { AirplaneIcon } from 'assets';

function CrazyPlanes(): JSX.Element {
  return (
    <div className="crazy-planes-container">
      <AirplaneIcon className="plane first" />
      <AirplaneIcon className="plane second" />
    </div>
  );
}

export default CrazyPlanes;
