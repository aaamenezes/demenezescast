import config from '../config.json'
import styled from 'styled-components'
import { CSSReset } from '../src/components/CSSReset'
import Menu from '../src/components/Menu'
import { StyledTimeline } from '../src/components/StyledTimeline'

export default function HomePage() {
  return (
    <>
      <CSSReset />
      <Menu />
      <Header />
      <Timeline playlists={config.playlists} />
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
        <img src={`https://github.com/${config.github}.png`} />
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
        const videos = playlists[item]
        return (
          <section>
            <h2>{item}</h2>
            <div>
              {videos.map(video => (
                <a href={video.url}>
                  <img src={video.thumb} alt="" />
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
