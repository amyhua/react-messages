import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

// import MessageCount from '../MessageCount/MessageCount';
// import MessageFilter from '../MessageFilter/MessageFilter';
import MessageList from '../MessageList/MessageList';

/*

- Inbox of messages
- Filter the messages by Read, Unread, All
- Mark each individual message as "Read"

1. What are our components?
2. What is the component hierarchy?
App
  MessageList
    []Message
      MessageText
      ReadCheckbox
  MessageFilter
  MessageCount
3. Static representation of your App (nondynamic)

*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageList messages={this.props.messages} />
      </div>
    );
  }
}

export default App;
