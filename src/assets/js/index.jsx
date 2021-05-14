import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { StateWrapper } from './state';

ReactDOM.render(
  <StateWrapper state={window.state}>
    <App />
  </StateWrapper>,
  document.getElementById('root')
);
