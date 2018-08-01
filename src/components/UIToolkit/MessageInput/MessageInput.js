import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MessageInput.css';

class MessageInput extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }
   
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event, value, username) {
    this.props.handleSubmit(event, value, username);
    this.setState({ value: ''});
  }
  
  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event, this.state.value, "teste")}>
        <div className="message-input-wrapper">
          <input type="text" className="message-input"  placeholder="Say hello!" value={this.state.value} onChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

MessageInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default MessageInput;