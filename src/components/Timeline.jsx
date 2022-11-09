import React from 'react'
import styled from 'styled-components'

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1199px;
  padding: 16px;
  margin: 0 auto;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;

    &.rounded {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        color: currentColor;

        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
        }
      }
    }
  }
`

export default function Timeline({ playlists, searchValue }) {
  return (
    <StyledTimeline>
      {Object.keys(playlists).map(item => {
        const { rounded, videos } = playlists[item]
        const filteredVideos = videos.filter(video => (
          video.title.toLowerCase().includes(searchValue.toLowerCase())
        ))

        if (filteredVideos.length === 0) return null

        return (
          <section key={videos[0].title} style={{ marginBottom: '3rem' }}>
            <h2>{item}</h2>
            <div style={{ paddingBottom: '2rem' }}>
              {filteredVideos.map(video => (
                <a href={video.url} key={video.url}>
                  <img
                    src={video.thumb}
                    alt=''
                    className={rounded ? 'rounded' : ''}
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
