import React, { createContext, useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { SearchPage, ResultsPage } from 'pages';
import { AppContext } from 'types';
import { getAllAirlines, getAllAirports, getAllFlights } from 'services';
import { NavBar, SideBar } from 'components';
import { sideBanner } from 'assets';

interface RouteDescription {
  path: string;
  component: JSX.Element;
}

const defaultAppContext: AppContext = {
  flights: [],
  airports: [],
  airlines: [],
};

export const appContext = createContext<AppContext>(defaultAppContext);

const routes: RouteDescription[] = [
  { path: '/', component: <SearchPage /> },
  { path: '/results', component: <ResultsPage /> },
];

function App(): JSX.Element {
  const [appState, setAppState] = useState<AppContext>(defaultAppContext);
  useEffect(makeInitialFetch, []);

  function makeInitialFetch(): void {
    (async function () {
      try {
        const airports = await getAllAirports();
        const airlines = await getAllAirlines();
        const flights = await getAllFlights();
        setAppState({ airports, airlines, flights });
      } catch (O_o) {
        console.log(O_o);
      }
    })();
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
