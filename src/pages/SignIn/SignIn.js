import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './SignIn.css';

import { auth } from '../../firebase';
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

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (event) => {
    event.preventDefault();    
    let classes = ["sign-in-wrapper", "sign-in-wrapper-enter"];
    
    const { history } = this.props;

    // FIX THIS! :(
    var self = this;
    auth.GoogleSignIn().then((result) =>  {
      self.setState({classes});    
      
      // history.push(routes.HOME);       
      
    })
    .catch(err => console.log('nope!'));
  }

  render() {
    return (
      <div className={this.state.classes.join(' ')}>
        <div onClick={this.onSubmit} className="sign-in-button" value="Enter">Enter</div>
        <div className="made-with-love">Made with <span className="heart">❤</span> in Brazil</div>   
      </div>    
    )
  }
}

export default withRouter(SignInPage);