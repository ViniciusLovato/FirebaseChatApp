import React from 'react';
import PropTypes from 'prop-types';

import './MessageBubble.css';

const MessageBubble = (props) => (
  <div className="message-bubble-wrapper">
   {props.children}
  </div>
);

MessageBubble.propTypes = {
  children: PropTypes.any.isRequired
}

export default MessageBubble;