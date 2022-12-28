import error from '../../assets/404.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Fonts from '../../utils/Atoms'
import Colors from '../../utils/Colors'

const ErrorImage = styled.img`
  width: 200px;
  @media (min-width: 992px) {
    width: 550px;
  }
`
const SectionError = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: ${Fonts.principal};
  color: ${Colors.primary};
  @media (min-width: 992px) {
    height: 800px;
  }
`
const HomeLink = styled(Link)`
  color: ${Colors.primary};
  font-size: 14px;
  letter-spacing: 1px;
  @media (min-width: 992px) {
    font-size: 18px;
  }
`
const TextError = styled.p`
  font-size: 19px;
  text-align: center;
  padding: 5px 20px;
  margin-bottom: 20vh;
  @media (min-width: 992px) {
    font-size: 40px;
    margin-bottom: 25vh;
    margin-top: 10vh;
    br {
      display: none;
    }
  }
`
function Error() {
  return (
    <SectionError>
      <ErrorImage src={error} alt="error" />
      <TextError>
        Oups! La page que <br />
        vous demandez n'existe pas.
      </TextError>
      <HomeLink to="/">Retourner sur la page d’accueil</HomeLink>
    </SectionError>
  )
}

export default Error
