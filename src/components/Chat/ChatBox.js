import React, { Component } from 'react';
import './ChatBox.css';

import MessageService from '../../services/MessageService';

import MessageInput from '../UIToolkit/MessageInput/MessageInput';
import MessageContactHeader from '../UIToolkit/MessageContactHeader/MessageContactHeader';

class ChatBox extends Component {
  state = { 
    messages: []
  }

  handleSubmit = (event, msg, username) => {
    event.preventDefault();
    MessageService.sendMessage(msg, null, username);   
  }

  componentDidMount = () => {
    MessageService.listen(messages => {
      console.log(messages);
      this.setState({messages})
    });
  }
  
  render() {
    return (
      <div className="chat-box">
        <MessageContactHeader/>
        {this.state.messages.map((msg) => 
          <span key={msg.key}>{msg.message}</span>
        )}
        <MessageInput handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default ChatBox;