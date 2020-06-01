import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    
  }

  html, body {
    background-color: #eee;
    
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button:disabled {
    display: none;
  }

  textarea {
    resize: none
  }
`

export default GlobalStyles