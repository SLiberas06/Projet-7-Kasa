import Fonts from '../../utils/Atoms'
import styled from 'styled-components'
import Colors from '../../utils/Colors'
import LogoFooter from '../../assets/LOGO_Footer.png'

const StyledFooter = styled.footer`
  width: 100%;
  height: 110px;
  background-color: #000000;
  color: ${Colors.textWhite};
  padding: 60px;
`

const FooterLogo = styled.img`
  margin-left: 70px;
`
const FooterH3 = styled.h3`
  font-family: ${Fonts.principal};
  font-size: 18px;
  font-weight: 300;
`
function Footer() {
  return (
    <StyledFooter>
      <FooterLogo src={LogoFooter} alt="Kasa" />
      <FooterH3>© 2020 Kasa. All rights reserved</FooterH3>
    </StyledFooter>
  )
}

export default Footer
