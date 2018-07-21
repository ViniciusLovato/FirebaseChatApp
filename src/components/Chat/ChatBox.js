import React from 'react';
import './ChatBox.css';

import MessageInput from '../UIToolkit/MessageInput/MessageInput';
import MessageContactHeader from '../UIToolkit/MessageContactHeader/MessageContactHeader';

const ChatBox = () => (
  <div className="chat-box">
    <MessageContactHeader/>
    <MessageInput/>
  </div>

);

export default ChatBox;