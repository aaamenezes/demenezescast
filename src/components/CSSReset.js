import { createGlobalStyle } from 'styled-components'

export const CSSReset = createGlobalStyle`
  /* Reset */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${ ({ mode, theme }) => theme.color[mode].color };
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${ ({ mode, theme }) => (
    theme.color[mode === 'light' ? 'dark' : 'light'].border
  ) };
    border-radius: 4px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    color: ${ ({ mode, theme }) => theme.color[mode].color };
    background-color: ${ ({ mode, theme }) => (
    theme.color[mode].backgroundColor
  ) };
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`
