import React from 'react'
import styled from 'styled-components'
import config from '../../config.json'

const StyledHeader = styled.header`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`

export default function Header() {
  return (
    <StyledHeader>
      {/* <img src='banner' /> */}
      <section className='user-info'>
        <img
          src={`https://github.com/${ config.github }.png`}
          alt='Profile of channel'
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}
