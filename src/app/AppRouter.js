import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Routes from './routes';
import Todo from '../components/Todo';

const AppRouter = (props) => (
  <BrowserRouter>
    <Switch>
        <Route path={Routes.TODO} component={Todo} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;