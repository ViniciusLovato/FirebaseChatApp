import React from 'react';
import './Message.css';

import Avatar from '../Avatar/Avatar';
import MessageBubble from '../MessageBubble/MessageBubble';

const Message = (props) => {
  let classes = ["message-wrapper"];
  classes.push(props.position);
  return (
    <div className={classes.join(' ')}>
      <Avatar size="60px" pic="http://i.pravatar.cc/180"/> 
      <MessageBubble>{props.msg.message}</MessageBubble>
    </div>
  );
};

export default Message;