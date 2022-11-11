import React from 'react'
import styled from 'styled-components'
import { ColorModeContext } from './ColorMode'

const StyledSwitch = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 50px;
  height: 25px;
  padding: 3px;
  border: 1px solid ${ ({ theme }) => theme.background };
  margin-left: auto;
  border-radius: 10000px;
  font-size: 12px;
  background-color: #333333;

  label {
    width: 50px;
  }

  span {
    display: inline-flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
  }
  
  label::before {
    content: "";
    background-color: #fafafa;
    border: 1px solid #333333;
    width: 21px;
    height: 21px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: .3s;
    cursor: pointer;
  }
  
  input[type="checkbox"] {
    display: none;

    &:checked + label::before {
      transform: translateX(110%);
    }
  }
`

export default function DarkModeSwitch() {
  const { handleMode } = React.useContext(ColorModeContext)

  return (
    <StyledSwitch>
      <input
        id='darkmode'
        type='checkbox'
        onChange={handleMode}
      />
      <label
        htmlFor='darkmode'
        className='darkmode-switch'
      >
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledSwitch>
  )
}
