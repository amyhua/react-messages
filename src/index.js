import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <App messages={['Hello', 'Wassup', 'Whatever', 'Yoohoo']} />,
  document.getElementById('root')
);
