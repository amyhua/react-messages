import React from 'react';
import './Message.css';

import MessageText from '../MessageText/MessageText';
import ReadCheckbox from '../ReadCheckbox/ReadCheckbox';

export default (props) => {
  return <div className="Message">
    <MessageText message={props.message} />
    <ReadCheckbox />
  </div>;
};