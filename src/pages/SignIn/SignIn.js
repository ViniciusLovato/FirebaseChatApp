import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './SignIn.css';

import { auth } from '../../firebase';
import AuthUserContext from '../../authentication/AuthUserContext';
import UserService from '../../services/UserService';
import * as routes from '../../constants/routes';

const SignInPage = ({ history }) => (
  <SignInForm history={history}></SignInForm>
);

class SignInForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      classes: ["sign-in-wrapper"]
    }
  }

  onRegister = (user) => {
    UserService.register(user);
  }

  onTransitionEnd = (event) => {
    if(event.propertyName === 'width'){
      const { history } = this.props;
      history.push(routes.HOME);  
    }
  }

  onSubmit = (event) => {
    event.preventDefault();    
    auth.GoogleSignIn().then((result) =>  {
      this.onRegister(result.user);
    })
    .catch(err => console.log(err));
  }

  onEnter = (event) => {
    event.preventDefault();
    let classes = ["sign-in-wrapper", "sign-in-wrapper-enter"];
    this.setState({classes});
  }

  render() {
    let classes = this.state.classes.join(' ');

    return (
      <div  onTransitionEnd={this.onTransitionEnd} className={classes}>
        <AuthUserContext.Consumer>
          {authUser => authUser ?  
             <div onClick={this.onEnter} className="sign-in-button" value="Enter">Hello, {authUser.displayName}</div> : 
             <div onClick={this.onSubmit} className="sign-in-button" value="Enter">Hello, Stranger</div>
          }
        </AuthUserContext.Consumer>
        <div className="made-with-love">Made with <span className="heart">❤</span> in Brazil</div>   
      </div>    
    )
  }
}

export default withRouter(SignInPage);