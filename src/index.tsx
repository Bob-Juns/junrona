import React from 'react';
import { render } from 'react-dom';

import axios from 'axios';

import App from './App';
import GlobalStyle from '@styles/GlobalStyle';

axios.create({
  baseURL: process.env.API_URI,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  },
});

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector('#root'),
);
