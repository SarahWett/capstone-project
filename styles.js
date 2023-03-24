import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
    background-image: url("https://images.unsplash.com/photo-1629217898100-4b28f4653506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80");
    background-repeat:  no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding-bottom: 20vh;
  }
  
`;
