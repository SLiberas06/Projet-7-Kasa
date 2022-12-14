import styled from 'styled-components'
import Fonts from '../../utils/Atoms'
import Colors from '../../utils/Colors'

const StyledHomeBanner = styled.div`
  background: ${Colors.linearBanner};
  object-fit: cover;
  width: 335px;
  height: 110px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 992px) {
    width: 90%;
    height: 220px;
    border-radius: 25px;
    text-align: center;
  }
`
const TitleHomeBanner = styled.h1`
  color: ${Colors.textWhite};
  font-family: ${Fonts.principal};
  font-weight: 200;
  font-size: 24px;
  letter-spacing: 1.5px;
  padding: 10px 30% 10px 5px;
  margin-left: 10px;
  opacity: 0.9;
  position: absolute;
  @media (min-width: 992px) {
    font-size: 48px;
    text-align: center;
    padding: 0 20%;
  }
`
const BannerHomeImg = styled.img`
  position: relative;
  width: 335px;
  height: 110px;
  border-radius: 10px;
  opacity: 0.7;
  object-fit: cover;
  @media (min-width: 992px) {
    width: 100%;
    height: 220px;
    border-radius: 25px;
  }
`

function HomeBanner({ cover }) {
  return (
    <StyledHomeBanner>
      <BannerHomeImg src={cover} alt="banner" />
      <TitleHomeBanner>Chez vous, partout et ailleurs</TitleHomeBanner>
    </StyledHomeBanner>
  )
}
export default HomeBanner
