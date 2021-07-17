import React from 'react';
import './CrazyPlanes.scss';
import { AirplaneIcon } from 'assets';

function CrazyPlanes(): JSX.Element {
  return (
    <div id="crazy-planes">
      <AirplaneIcon className="plane first" />
      <AirplaneIcon className="plane second" />
    </div>
  );
}

export default CrazyPlanes;
