import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import * as routes from '../constants/routes';
import withAuthentication from '../authentication/withAuthentication';

import './App.css';

import HomePage from './Home/Home';
import SignIn from './SignIn/SignIn';


const App = () =>
  <Router>
    <React.Fragment>
      <Route exact path={routes.SIGN_IN} component={() => <SignIn />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} /> 
    </React.Fragment>
  </Router>
  

export default withAuthentication(App);