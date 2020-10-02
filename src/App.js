import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes';
import RouteManager from './components/RouteManager';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Router>
        <React.Fragment>
          <Switch>
            <Switch>{routes.map(route => RouteManager(route))}</Switch>
          </Switch>
        </React.Fragment>
      </Router>
    </Suspense>
  );
};

export default App;
