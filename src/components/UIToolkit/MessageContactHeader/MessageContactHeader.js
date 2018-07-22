import React from 'react';
import './MessageContactHeader.css';

const MessageContactHeader = (props) => (
  <div className="message-contact-header-wrapper">
     <span className="message-contact-header-name">Vinicius Lovato</span>
     <span className="message-contact-header-last-seen">Last seen 20 minutes ago</span>
  </div>
);



export default MessageContactHeader;