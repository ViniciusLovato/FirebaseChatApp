import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

import Avatar from '../Avatar/Avatar';
import MessageBubble from '../MessageBubble/MessageBubble';

const Message = (props) => {
  let classes = ["message-wrapper"];
  let { position, msg } = props
  classes.push(position);
  return (
    <div className={classes.join(' ')}>
      <Avatar size="60px" pic="http://i.pravatar.cc/180"/> 
      <MessageBubble>{msg.message}</MessageBubble>
    </div>
  );
};

Message.propTypes = {
  position: PropTypes.string.isRequired,
  msg: PropTypes.object.isRequired
}

export default Message;