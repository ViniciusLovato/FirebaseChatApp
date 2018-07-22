import React from 'react';
import './Avatar.css';

const Avatar = (props) => (
  <div className="user-avatar-wrapper">
    <img  className="user-avatar" src={props.pic} width={props.size} alt=""/>
  </div>
);


export default Avatar;