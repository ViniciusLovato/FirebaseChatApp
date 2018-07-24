import React from 'react';
import './Sidebar.css';
import SignOut from '../SignOut';

const Sidebar = () => (
  <div className="sidebar">
    <ul>
        <SignOut/>
    </ul>
  </div>
);


export default Sidebar;