import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    outline: 0;
  }

  html {
    /* a cada 1rem será considera 10px */
    /* font-size: 62.5%; */
    font-size: 62.5%;
    text-rendering: optimizelegibility;
    @media (max-width: 950px) {
      font-size: 50%;
    }
    @media (max-width: 556px) {
      font-size: 40%;
    }

  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textPrimary};
    font: 400 3.0rem Quicksand, sans-serif;
    text-rendering: optimizelegibility;
    position: relative;
  }

  button {
    cursor: pointer;
  }
`
