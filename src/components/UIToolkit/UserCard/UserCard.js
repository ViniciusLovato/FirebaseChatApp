import React from 'react';
import Avatar from '../Avatar/Avatar';

import './UserCard.css';

const UserCard = () => (
  <div className="user-card-wrapper">
    <div className="user-card-pic">
      <Avatar size="80px" pic="http://i.pravatar.cc/180"/> 
    </div>
    <div className="user-card-details">
      <div className="user-card-details-name">Name Lastname</div>
      <div className="user-card-details-message">Message goes here</div>
    </div>
  </div>
);


export default UserCard;