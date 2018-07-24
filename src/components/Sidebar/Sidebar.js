import React from 'react';
import './Sidebar.css';
import SignOut from '../UIToolkit/SignOut/SignOut';

const Sidebar = () => (
  <div className="sidebar">
    <ul>
        <SignOut/>
    </ul>
  </div>
);


export default Sidebar;