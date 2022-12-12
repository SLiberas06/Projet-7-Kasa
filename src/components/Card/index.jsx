import PropType from 'prop-types'
import styled from 'styled-components'
import Colors from '../../utils/Colors'
import Fonts from '../../utils/Atoms'

const StyledCard = styled.div`
  width: 335px;
  height: 255px;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  background: ${Colors.linearCard}, ${Colors.primary};
`
const ImageCard = styled.img`
  width: 335px;
  height: 255px;
  border-radius: 10px;
  position: absolute;
`

const TitleCard = styled.h2`
  width: 100px;
  font-size: 19px;
  font-family: ${Fonts.principal};
  color: ${Colors.textBanner};
  margin: 15px;
  font-weight: 100;
  opacity: 0.9;
`

function Card({ title, cover }) {
  return (
    <StyledCard>
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
