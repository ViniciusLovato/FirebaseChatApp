import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import AuthUserContext from './AuthUserContext';

import ChatList from './ChatList';


import ChatService from '../services/ChatService';

class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      chatList: [],
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    ChatService.create({
      title: this.state.value
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  componentDidMount = () => {
    ChatService.listen((chatList) => {
      this.setState({ chatList });
    });
  }

  render = () => {
    return (
      <AuthUserContext.Consumer>
        {authUser => 
          <div>
            <h1>HomePage</h1>
            <ChatList value={this.state.chatList}/>
            <p>The Home Page is accessible by every signed in user.</p>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button onClick={() => this.handleClick()}>Send Message</button>
          </div>  
        }
    </AuthUserContext.Consumer>
      
    );
  }
}

const authCondition = (authUser) => authUser;

export default withAuthorization(authCondition)(HomePage);