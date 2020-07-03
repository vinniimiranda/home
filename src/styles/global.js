import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');


  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background: #000014;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body, input, button{
    color: #fff;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
