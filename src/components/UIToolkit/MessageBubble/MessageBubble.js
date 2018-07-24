import React from 'react';
import './MessageBubble.css';

const MessageBubble = (props) => (
  <div className="message-bubble-wrapper">
   {props.children}
  </div>
);

export default MessageBubble;