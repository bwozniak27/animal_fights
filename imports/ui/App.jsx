import React from 'react';
import { Picking } from './Picking';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Picking />
        </Route>
      </Switch>
    </Router>
  )
};
