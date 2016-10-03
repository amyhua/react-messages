import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

// import MessageCount from '../MessageCount/MessageCount';
// import MessageFilter from '../MessageFilter/MessageFilter';
import MessageList from '../MessageList/MessageList';
import MessageCount from '../MessageCount/MessageCount';
import MessageFilter from '../MessageFilter/MessageFilter';

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
  constructor(props) {
    super(props);
    this.state = {
      messages: props.messages // sets the initial messages from props
    };
    this.affectState = this.affectState.bind(this);
  }

  affectState() {
    console.log('affectState')
    this.setState({
      messages: ['Hello', 'Wassup']
    });
  }

  render() {
    return (
      <div className="App">
        <div className="message-header">
          <MessageCount />
          <MessageFilter />
        </div>
        <MessageList messages={this.props.messages}
          affectState={this.affectState} />
      </div>
    );
  }
}

export default App;
