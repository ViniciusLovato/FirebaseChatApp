import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

import './Home.css';


import withAuthorization from '../../authentication/withAuthorization';
import AuthUserContext from '../../authentication/AuthUserContext';

import ChatBox from '../../components/Chat/ChatBox';
import UserDetails from '../../components/UserDetails/UserDetails';
import Lists from '../../components/Lists/Lists';

import ChatService from '../../services/ChatService';
import UserService from '../../services/UserService';

import Sidebar from '../../components/Sidebar/Sidebar';

class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      chatList: [],
      contactList: [],
      currentChat: '-LHQDF0DxtDr34djKroV',
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
    UserService.listen((contactList) => {
      this.setState({ contactList });
    })
  }

  render = () => {
    let { currentChat, contactList } = this.state;

    return (
        <AuthUserContext.Consumer>
          {authUser => 
            <div className="wrapper">
              <Sidebar/>
              <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}
                component="div" className="content-wrapper">
                <Lists contactList={contactList}/>
                <ChatBox currentChat={currentChat}/>
                <UserDetails/> 
                
              </CSSTransitionGroup>
            </div>  
          }
        </AuthUserContext.Consumer>
    );
  }
}

const authCondition = (authUser) => authUser;

export default withAuthorization(authCondition)(HomePage);