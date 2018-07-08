import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) => (
  <div>
    <h1>SignInPage</h1>
    <SignInForm history={history}></SignInForm>
  </div>
);

class SignInForm extends Component {
  onSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    auth.GoogleSignIn()
      .then((result) =>  {
        console.log(result.user);
        history.push(routes.HOME);
      })
      .catch(err => console.log('nope!'));
    
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign in</button>
      </form>
      
    )
  }
}

export default withRouter(SignInPage);