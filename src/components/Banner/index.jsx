import styled from 'styled-components'
import Fonts from '../../utils/Atoms'
import Colors from '../../utils/Colors'
import ImageBanner from '../../assets/IMG.png'

const StyledBanner = styled.div`
  background: ${Colors.linearBanner}, url('${ImageBanner}') no-repeat;
  object-fit: cover;
  width: 335px;
  height: 110px;
  border-radius: 10px;
  align-items: center;
  @media (min-width: 992px) {
    width: 90%;
    height: 220px;
    border-radius: 25px;
    margin: 0;
    object-fit: contain;
  }
`
const TitleBanner = styled.h1`
  color: ${Colors.textBanner};
  font-family: ${Fonts.principal};
  font-weight: 200;
  font-size: 24px;
  letter-spacing: 1.5px;
  padding: 10px 30% 0 5px;
  margin-left: 10px;
  opacity: 0.9;
`

function Banner() {
  return (
    <StyledBanner>
      <TitleBanner>Chez vous, partout et ailleurs</TitleBanner>
    </StyledBanner>
  )
}
export default Banner
