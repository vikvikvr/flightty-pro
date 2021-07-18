import React, { useEffect, useState } from 'react';

import { getInitialData, appContext, defaultAppContext } from 'services';
import { PageRouter } from 'components';
import { sideBanner } from 'assets';
import { AppContext } from 'types';
import './App.scss';
import useAppAnimations from './useAppAnimations';

function App(): JSX.Element {
  const [appState, setAppState] = useState<AppContext>(defaultAppContext);
  useEffect(makeInitialFetch, []);
  useAppAnimations();

  function makeInitialFetch(): void {
    getInitialData()
      .then((state) => setAppState(state))
      .catch((O_o) => console.log(O_o));
  }

  return (
    <div className="App">
      <appContext.Provider value={appState}>
        <PageRouter />
        <img src={sideBanner} className="right-banner" alt="right banner" />
      </appContext.Provider>
    </div>
  );
}

export default App;
