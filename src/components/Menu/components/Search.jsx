import React from 'react'
import styled from 'styled-components'

const StyledSearch = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid ${ ({ theme }) => theme.neutral_500 };
  margin: 0 auto;
  border-radius: 4px;
  overflow: hidden;

  @media (min-width: 768px) {
    grid-area: initial;
    max-width: 425px;
  }
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${ ({ theme }) => theme.color };
    background-color: ${ ({ theme }) => theme.background };
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${ ({ theme }) => theme.brand_100 };
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${ ({ theme }) => theme.neutral_500 };
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`

// Home
// Menu
// Search
// Informação sempre desce

export default function Search({ searchValue, setSearchValue, mode }) {
  return (
    <StyledSearch mode={mode}>
      <input
        type='text'
        onChange={event => setSearchValue(event.target.value)}
        value={searchValue}
      />
      <button type='button'>🔎</button>
    </StyledSearch>
  )
}
