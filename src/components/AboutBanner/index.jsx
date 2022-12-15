import styled from 'styled-components'
import Colors from '../../utils/Colors'
import ImageBannerAbout from '../../assets/Banner_About.png'

const StyledAboutBanner = styled.div`
  width: 335px;
  height: 223px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: ${Colors.linearBanner};
  margin-bottom: 20px;
  @media (min-width: 992px) {
    background: ${Colors.linearBanner}, url('${ImageBannerAbout}');
    width: 90%;
    border-radius: 25px;
    background-size: 100.5%;
  }
`
const BannerAboutImg = styled.img`
  width: 100%;
  height: 223px;
  object-fit: cover;
  border-radius: 10px;
  opacity: 0.6;
  @media (min-width: 992px) {
    display: none;
  }
`
function AboutBanner({ cover }) {
  return (
    <StyledAboutBanner>
      <BannerAboutImg src={cover} />
    </StyledAboutBanner>
  )
}
export default AboutBanner
