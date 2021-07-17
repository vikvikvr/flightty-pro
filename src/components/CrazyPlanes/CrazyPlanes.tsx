import React from 'react';
import './CrazyPlanes.scss';
import { AirplaneIcon } from 'assets';

function CrazyPlanes(): JSX.Element {
  return (
    <div id="crazy-planes">
      <AirplaneIcon className="plane top" />
      <AirplaneIcon className="plane bottom" />
    </div>
  );
}

export default CrazyPlanes;
