import React, { PropTypes, Component } from 'react';
import './Message.css';

import MessageText from '../MessageText/MessageText';
import ReadCheckbox from '../ReadCheckbox/ReadCheckbox';

export default class Message extends Component {
  render() {
    return <div className="Message">
      <MessageText message={this.props.message}
        affectState={this.props.affectState} />
        {this.props.affectState}
      <input type="checkbox"
        onChange={this.props.affectState}
        onClick={this.props.affectState} />
    </div>;
  }
}

Message.propTypes = {
  affectState: PropTypes.func.isRequired
};