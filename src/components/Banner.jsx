import styled from 'styled-components'
import imageBanner from '../assets/banner.jpg'

const StyledBanner = styled.section`
  max-height: 45vh;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default function Banner() {
  return (
    <StyledBanner>
      <img src={imageBanner.src} alt='Banner image' />
    </StyledBanner>
  )
}