import React from 'react';
import './ContactList.css';

import UserCard from '../UIToolkit/UserCard/UserCard';
import SearchField from '../UIToolkit/Search/SearchField';

const ContactList = (props) => (
  <div className="contact-list-wrapper">
    <SearchField/>
    <ul className="contact-list">
      {props.value.map(val => 
        <li key={val.key}>
          <UserCard/>
        </li>
      )}
    </ul>
  </div>
  
)

export default ContactList;