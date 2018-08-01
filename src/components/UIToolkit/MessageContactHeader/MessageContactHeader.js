import React from 'react';
import PropTypes from 'prop-types';

import './MessageContactHeader.css';

const MessageContactHeader = (props) => (
  <div className="message-contact-header-wrapper">
     <span className="message-contact-header-name">{props.name}</span>
     <span className="message-contact-header-last-seen">Last seen {props.lastSeen} minutes ago</span>
  </div>
);

MessageContactHeader.propTypes = {
  name: PropTypes.string,
  lastSeen: PropTypes.number
}

export default MessageContactHeader;