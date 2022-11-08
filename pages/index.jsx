import React from 'react'
import styled from 'styled-components'
import config from '../config.json'
import { CSSReset } from '../src/components/CSSReset'
import Menu from '../src/components/Menu'
import { StyledTimeline } from '../src/components/StyledTimeline'
import Banner from '../src/components/Banner'

export default function HomePage() {
  return (
    <>
      <CSSReset />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}
      >
        <Menu />
        <Banner />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  )
}

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

function Header() {
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

function Timeline({ playlists }) {
  return (
    <StyledTimeline>
      {Object.keys(playlists).map(item => {
        const { rounded, videos } = playlists[item]
        return (
          <section>
            <h2>{item}</h2>
            <div>
              {videos.map(video => (
                <a href={video.url} key={video.url}>
                  <img
                    src={video.thumb}
                    alt=''
                    className={rounded && 'rounded'}
                  />
                  <span>
                    {video.title}
                  </span>
                </a>
              ))}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}