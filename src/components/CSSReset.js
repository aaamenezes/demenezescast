import { createGlobalStyle } from 'styled-components'

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', 'sans-serif';
  }
  body {
    font-family: sans-serif;
    color: ${ ({ theme }) => theme.color };
    background-color: ${ ({ theme }) => theme.neutral_800 };
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
    max-width: 100%;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
  }

  .styled-scrollbar {
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${ ({ theme }) => theme.neutral_600 };
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${ ({ theme }) => theme.neutral_300 };
      border-radius: 4px;
    }
  }
`
