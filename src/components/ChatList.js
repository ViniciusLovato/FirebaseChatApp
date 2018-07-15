import React from 'react';

const ChatList = (props) => (
  <ul>
    {props.value.map(val => <li key={val.key}>{val.title}</li>)}
  </ul>
)

export default ChatList;