/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import Mode from '../DarkMode'
import Search from './components/Search'
import config from '../../../config.json'

const StyledMenu = styled.header`
  position: fixed;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 56px;
  padding: 0.5rem;
  border: 1px solid ${ ({ theme }) => theme.neutral_500 };
  background-color: ${ ({ theme }) => theme.background };

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr auto;
  }

  .logo {
    width: 100%;  
    max-width: 127px;

    .text {
      fill: ${ ({ theme }) => theme.color };
    }
  }
`

export default function Menu({ searchValue, setSearchValue, mode, setMode }) {
  return (
    <StyledMenu mode={mode}>
      <div>
        <Logo />
      </div>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        mode={mode}
      />
      <Mode mode={mode} setMode={setMode} />
    </StyledMenu>
  )
}

function Logo() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center'
    }}
    >
      <img
        src={config.logoIcon}
        alt='logo icon'
        style={{
          marginRight: '1rem'
        }}
      />
      <h3>deMenezesCast</h3>
    </div>
  )
}
