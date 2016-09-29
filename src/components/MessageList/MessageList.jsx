import React, { Component, PropTypes } from 'react';

import Message from '../Message/Message';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <div className="MessageList">
              {this.props.messages.map((message, i) => (
                <Message
                  key={i}
                  message={message} />)
              )}
            </div>
            )
  }
}