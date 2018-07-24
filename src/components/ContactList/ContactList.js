import React from 'react';
import './ContactList.css';

import AuthUserContext from '../../authentication/AuthUserContext';

import UserCard from '../UIToolkit/UserCard/UserCard';
import SearchField from '../UIToolkit/Search/SearchField';


const ContactList = (props) => (
  <div className="contact-list-wrapper">
    <AuthUserContext.Consumer>
      {authUser => <h4> Hello {authUser.displayName} </h4>}
    </AuthUserContext.Consumer>
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