import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = (props) => (
  <div className="user-avatar-wrapper">
    <img  className="user-avatar" src={props.pic} width={props.size} alt=""/>
  </div>
);

Avatar.propTypes = {
  pic: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}

export default Avatar;