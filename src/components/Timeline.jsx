import React from 'react'
import styled from 'styled-components'
import { ColorModeContext, PodcastsProvider } from './ColorMode'

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
    aspect-ratio: 1/1;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }

  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;

    div {
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

export default function Timeline({ playlists, searchValue, mode }) {
  const { podcasts } = React.useContext(ColorModeContext)

  return (
    <StyledTimeline mode={mode}>
      <section key='default categorie' style={{ marginBottom: '3rem' }}>
        <h2>Default Categorie</h2>
        <div className='styled-scrollbar' style={{ paddingBottom: '2rem' }}>
          {podcasts.map(podcast => (
            <a href={podcast.url} key={podcast.url}>
              <img
                src={podcast.thumb}
                alt={`Thumbnail of ${ podcast.title }`}
              />
              <span>
                {podcast.title}
              </span>
            </a>
          ))}
        </div>
      </section>
    </StyledTimeline>
  )
}
