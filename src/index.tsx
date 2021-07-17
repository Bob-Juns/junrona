import React from 'react';
import { render } from 'react-dom';

import App from './App';
import GlobalStyle from '@styles/GlobalStyle';

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector('#root'),
);
