import React from 'react';

import { AirplaneIcon } from 'assets';
import './CrazyPlanes.scss';

function CrazyPlanes(): JSX.Element {
  return (
    <div id="crazy-planes">
      <AirplaneIcon className="plane top" />
      <AirplaneIcon className="plane bottom" />
    </div>
  );
}

export default CrazyPlanes;
