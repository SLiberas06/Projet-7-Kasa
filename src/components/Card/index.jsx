import PropType from 'prop-types'
import styled from 'styled-components'
import Colors from '../../utils/Colors'
import Fonts from '../../utils/Atoms'
import { Link } from 'react-router-dom'

const StyledCard = styled(Link)`
  width: 335px;
  height: 255px;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  background: ${Colors.linearCard}, ${Colors.primary};
  @media (min-width: 992px) {
    width: 340px;
    height: 340px;
  }
`
const ImageCard = styled.img`
  width: 335px;
  height: 255px;
  border-radius: 10px;
  position: absolute;
  object-fit: cover;
  @media (min-width: 992px) {
    width: 340px;
    height: 340px;
  }
`

const TitleCard = styled.h2`
  width: 100%;
  font-size: 19px;
  font-family: ${Fonts.principal};
  color: ${Colors.textWhite};
  margin: 15px;
  font-weight: 100;
  opacity: 0.9;
`

function Card({ title, cover, id }) {
  return (
    <StyledCard to={id}>
      <ImageCard src={cover} alt="à louer" />
      <TitleCard>{title}</TitleCard>
    </StyledCard>
  )
}

Card.propTypes = {
  title: PropType.string.isRequired,
  cover: PropType.string.isRequired,
}

Card.defaultProps = {
  title: 'Titre de la location',
}
export default Card
