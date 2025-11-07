import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    min-height: 100vh;   
    background: #FCFCFC;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
}



`;

export default GlobalStyle;
