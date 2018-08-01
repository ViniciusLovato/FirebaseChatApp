import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => (
  <li>
    <span onClick={(event) => {
      props.onClick(props.tabIndex)
    }}>{props.title}</span>
  </li>
);

Tab.propTypes = {
  tabIndex: PropTypes.number,
  title: PropTypes.string.isRequired
}

export default Tab;
