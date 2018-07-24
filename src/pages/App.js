import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import * as routes from '../constants/routes';
import withAuthentication from '../authentication/withAuthentication';

import './App.css';

import HomePage from './Home/Home';
import SignIn from '../components/SignIn';


const App = () =>
  <Router>
    <div className="wrapper">
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignIn />} />
    </div>
  </Router>

export default withAuthentication(App);