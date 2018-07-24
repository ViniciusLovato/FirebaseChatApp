import React, { Component } from 'react';
import './ChatBox.css';

import MessageService from '../../services/MessageService';

import MessageInput from '../UIToolkit/MessageInput/MessageInput';
import MessageContactHeader from '../UIToolkit/MessageContactHeader/MessageContactHeader';
import Message from '../UIToolkit/Message/Message';

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
        {/* Change this to a component */}
        <div className="temp-box">
          {this.state.messages.map((msg) => {
            let position = Math.round(Math.random()) === 1 ? 'end' : 'start';
            return <Message key={msg.key} msg={msg} position={position}/>
          })}
        </div>
        <MessageInput handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default ChatBox;