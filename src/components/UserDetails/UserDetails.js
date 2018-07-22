import React from 'react';
import './UserDetails.css';

import ChatMedia from '../UIToolkit/ChatMedia/ChatMedia';
import Avatar from '../UIToolkit/Avatar/Avatar';


const UserDetails = () => (
  <div className="user-details">
    <div className="user-details-header">
      
      <Avatar size="200px" pic="http://i.pravatar.cc/180"/> 
      <div className="user-details-panel">
        <div className="user-details-panel-name">Name Lastname</div>
        <div className="user-details-panel-sub">Something</div>
      </div>
    </div>

    <div className="user-details-info">
        <div>Mobile</div>
        <div>Username</div>
    </div>

    <div className="user-details-media">
      <ChatMedia/>
    </div>
    
  </div>
);



export default UserDetails;