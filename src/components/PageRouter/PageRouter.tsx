import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';

import { ResultsPage, SearchPage } from 'pages';
import { NavBar, SideBar } from 'components';
import { RouteDescription } from 'types';

const routes: RouteDescription[] = [
  { path: '/', component: <SearchPage /> },
  { path: '/results', component: <ResultsPage /> },
];

function PageRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} exact children={component} />
        ))}
        <Redirect to="/" />
      </Switch>
      <SideBar />
    </BrowserRouter>
  );
}

export default PageRouter;
