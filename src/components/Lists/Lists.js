import React from 'react';
import PropTypes from 'prop-types';


import './Lists.css';

import Tab from '../UIToolkit/Tabs/Tab';
import Tabs from '../UIToolkit/Tabs/Tabs';

import ContactList from '../ContactList/ContactList';

const Lists = (props) => (
  <div class="lists-wrapper">
    <Tabs>
      <Tab title="Chats">
          <p>content 0</p>
      </Tab>
      <Tab title="Contacts">
        <ContactList contactList={props.contactList}/>
      </Tab>
    </Tabs>
  </div>
);

Lists.propTypes = {
  contactList: PropTypes.array.isRequired
}


export default Lists;