import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: 'baloo 2';
    -webkit-font-smoothing: antialiased;
    -ms-overflow-style: none;
  }

  body::-webkit-scrollbar {
    display: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button,
  select {
    cursor: pointer;
  }

  input,
  textarea {
    cursor: text;
  }

  ul,
  ol {
    padding-left: 0;
  }
`;

export default GlobalStyle;
