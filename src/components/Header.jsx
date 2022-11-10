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

    h2 {
      margin-bottom: 0.5rem;
    }

    p {
      color: ${ ({ theme }) => theme.border };
    }

    a {
      color: currentColor;
      text-decoration: underline;
    }
  }
`

export default function Header({ mode }) {
  return (
    <StyledHeader mode={mode}>
      {/* <img src='banner' /> */}
      <section className='user-info'>
        <img
          src={`https://github.com/${ config.github }.png`}
          alt='Profile of channel'
        />
        <div className='text'>
          <h2>{config.name}</h2>
          <p>
            <a
              href={config.website.url}
              target='_blank'
              rel='noreferrer'
            >
              {config.website.title}
            </a>
          </p>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}
