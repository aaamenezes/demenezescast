import React from 'react'
import styled from 'styled-components'

const StyledDarkMode = styled.label`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  height: 40px;
  border: 1px solid ${ ({ theme, mode }) => theme.color[mode].border };
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

export default function Mode({ mode, setMode }) {
  function handleChange(event) {
    const newMode = event.target.checked ? 'dark' : 'light'
    setMode(newMode)
    localStorage.setItem('storageMode', newMode)
  }

  return (
    <StyledDarkMode mode={mode}>
      <input
        type='checkbox'
        checked={mode === 'dark'}
        onChange={handleChange}
        className='input'
      />
      <i className={`fa-regular fa-${ mode === 'light' ? 'sun' : 'moon' }`} />
      <span>{mode.toUpperCase()}</span>
    </StyledDarkMode>

  )
}
