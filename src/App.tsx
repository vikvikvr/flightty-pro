import React from 'react';
import './App.scss';
import SearchPage from 'containers/SearchPage';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

interface RouteDescription {
  path: string;
  component: JSX.Element;
}

const routes: RouteDescription[] = [
  { path: '/', component: <SearchPage /> },
  { path: '/results', component: <div>whoops</div> },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} exact children={component} />
          ))}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
