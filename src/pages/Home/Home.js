import React, { Component } from 'react';
import './Home.css';


import withAuthorization from '../../authentication/withAuthorization';
import AuthUserContext from '../../authentication/AuthUserContext';

import ContactList from '../../components/ContactList/ContactList';
import ChatBox from '../../components/Chat/ChatBox';
import UserDetails from '../../components/UserDetails/UserDetails';

import ChatService from '../../services/ChatService';

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
          <div className="home-wrapper">
            <ContactList value={[{key:1, title: 'test1'}, {key:2, title: 'test2'}]}/>
            <ChatBox/>
            <UserDetails/>      
          </div>  
        }
    </AuthUserContext.Consumer>
    );
  }
}

const authCondition = (authUser) => authUser;

export default withAuthorization(authCondition)(HomePage);