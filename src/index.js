import React from 'react';
import ReactDOM from 'react-dom';

import Phonebook from './components/PhoneBook';

import './css/body.css';

ReactDOM.render(
  <React.StrictMode>
    <Phonebook />
  </React.StrictMode>,
  document.getElementById('root'),
);
