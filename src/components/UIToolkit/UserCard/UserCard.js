import React from 'react';
import Avatar from '../Avatar/Avatar';
import PropTypes from 'prop-types';

import './UserCard.css';

const UserCard = (props) => (
  <div className="user-card-wrapper">
    <div className="user-card-pic">
      <Avatar size="80px" pic={props.photoURL}/> 
    </div>
    <div className="user-card-details">
      <div className="user-card-details-name">{props.displayName}</div>
      <div className="user-card-details-message">{props.lastMessage}</div>
    </div>
  </div>
);

UserCard.propTypes = {
  photoURL: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  lastMessage: PropTypes.string
}

export default UserCard;