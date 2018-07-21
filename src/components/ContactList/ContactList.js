import React from 'react';
import './ContactList.css';

const ContactList = (props) => (
  <div className="contact-list">
    <ul>
      {props.value.map(val => <li key={val.key}>{val.title}</li>)}
    </ul>
  </div>
  
)

export default ContactList;