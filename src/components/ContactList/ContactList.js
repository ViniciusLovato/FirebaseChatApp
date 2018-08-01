import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';

// import AuthUserContext from '../../authentication/AuthUserContext';

import UserCard from '../UIToolkit/UserCard/UserCard';
import SearchField from '../UIToolkit/Search/SearchField';


const ContactList = (props) => (
  <div className="contact-list-wrapper">
{/*     <AuthUserContext.Consumer>
      {authUser => <h4> Hello {authUser.displayName} </h4>}
    </AuthUserContext.Consumer> */}
    <SearchField/>
    <ul className="contact-list">
      {props.contactList.map(user => 
        <li key={user.key}>
          <UserCard displayName={user.displayName} photoURL={user.photoURL}/>
        </li>
      )}
    </ul>
  </div> 
)
 
ContactList.propTypes = {
  contactList: PropTypes.array.isRequired
}

export default ContactList;