import styled from 'styled-components'
import config from '../../config.json'

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
      <img src={config.bannerImage} alt='Banner image' />
    </StyledBanner>
  )
}