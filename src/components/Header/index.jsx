import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Fonts from '../../utils/Atoms'
import Colors from '../../utils/Colors'
import logo from '../../assets/LOGO.png'

const GlobalHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media (min-width: 992px) {
    padding: 5% 6% 4% 6%;
  } ;
`
const Logo = styled.img`
  width: 150px;
  @media (min-width: 992px) {
    width: 200px;
  } ;
`
const NavLink = styled(Link)`
  text-decoration: none;
  display: inline;
  text-transform: uppercase;
  font-family: ${Fonts.principal};
  color: ${Colors.primary};
  &:focus {
    text-decoration: underline;
  }
  margin: 0 0 0 15px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 992px) {
    font-size: 25px;
    text-transform: none;
    margin-left: 50px;
  } ;
`
function Header() {
  return (
    <GlobalHeader>
      <Logo src={logo} alt="Kasa" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </GlobalHeader>
  )
}

export default Header
