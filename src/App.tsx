import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { SearchPage, ResultsPage } from 'pages';
import { NavBar, SideBar } from 'components';
import { sideBanner } from 'assets';
import { AppContext } from 'types';
import { getInitialData, appContext, defaultAppContext } from 'services';
import './App.scss';

interface RouteDescription {
  path: string;
  component: JSX.Element;
}

const routes: RouteDescription[] = [
  { path: '/', component: <SearchPage /> },
  { path: '/results', component: <ResultsPage /> },
];

function App(): JSX.Element {
  const [appState, setAppState] = useState<AppContext>(defaultAppContext);
  useEffect(makeInitialFetch, []);

  function makeInitialFetch(): void {
    getInitialData()
      .then((state) => setAppState(state))
      .catch((O_o) => console.log(O_o));
  }

  return (
    <div className="App">
      <appContext.Provider value={appState}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            {routes.map(({ path, component }) => (
              <Route key={path} path={path} exact children={component} />
            ))}
            <Redirect to="/" />
          </Switch>
          <SideBar />
          <img src={sideBanner} className="right-banner" alt="side banner" />
        </BrowserRouter>
      </appContext.Provider>
    </div>
  );
}

export default App;
