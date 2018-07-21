import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import * as routes from '../constants/routes';
import withAuthentication from '../authentication/withAuthentication';

import './App.css';

import Sidebar from '../components/Sidebar/Sidebar';
import HomePage from './Home/Home';

const App = () =>
  <Router>
    <div className="wrapper">
      <Sidebar/>
      <Route exact path={routes.HOME} component={() => <HomePage />} />
    </div>
  </Router>

export default withAuthentication(App);