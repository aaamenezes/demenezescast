import React, { useContext } from 'react'
import styled from 'styled-components'
import { ColorModeContext } from './ColorMode'

const StyledDarkMode = styled.label`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  height: 40px;
  border: 1px solid ${ ({ theme }) => theme.border };
  border-radius: 4px;
  cursor: pointer;

  * {
    cursor: pointer;
  }

  .input {
    display: none;
    margin-right: 0.5rem;
  }

  i {
    margin-right: 0.5rem;
  }

  span {
    letter-spacing: 1px;
    font-size: 0.8rem;
    font-weight: 700;
  }
`

export default function Mode() {
  const { mode, handleMode } = useContext(ColorModeContext)

  const iconClassName = 'fa-regular fa-'.concat(
    mode === 'light' ? 'sun' : 'moon'
  )

  return (
    <StyledDarkMode>
      <input
        type='checkbox'
        checked={mode === 'dark'}
        onChange={handleMode}
        className='input'
      />
      <i className={iconClassName} />
      <span>{mode.toUpperCase()}</span>
    </StyledDarkMode>

  )
}
