import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import PropTypes from 'prop-types';

import './Tabs.css';

class Tabs extends Component {
  static defaultProps = {
    activeTab: 0
  }

  constructor(props) {
    super(props);
    this.state = {  
      currentActiveTab: this.props.activeTab
    };
  }

  handleTabChange = (activeTab) => {
    this.setState({
      currentActiveTab: activeTab
    });
  }

  renderChildren = () => (
    this.props.children.map((child, index) => (
      React.cloneElement(child, {
        onClick: this.handleTabChange,
        tabIndex: index,
        isActive: index === this.state.currentActiveTab,
        key: index
      })
    ))
  )

  renderActiveTabContent = () => {
    const { children } = this.props;
    const { currentActiveTab } = this.state;

    if(children[currentActiveTab]){
      return children[currentActiveTab].props.children;
    }
  }

  render() {
    return (
      <div className="tabs-wrapper">
          <ul className="tabs-navigation">
              {this.renderChildren()}
          </ul>
          <div className="tabs-active-content">
            {this.renderActiveTabContent()}
          </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  activeTab: PropTypes.number.isRequired
}

export default Tabs;
