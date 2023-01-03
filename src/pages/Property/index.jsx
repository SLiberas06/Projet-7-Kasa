// import styled from 'styled-components'
import DataProperty from '../../datas/logements.json'
import Colors from '../../utils/Colors'
import styled from 'styled-components'
import { Main } from '../../utils/Atoms'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import SlideShow from '../../components/Slider'
import Footer from '../../components/Footer'
import Fonts from '../../utils/Atoms'
import Tags from '../../components/Tags'

const PropertyWrapper = styled.div`
  margin-left: 7vw;
  width: 100%;
  font-family: ${Fonts.principal};
  color: ${Colors.primary};
`
const PropertyTitle = styled.h1`
  font-size: 18px;
  font-weight: 100;
  text-align: left;
  letter-spacing: 0.8px;
`
const PropertyLocation = styled.p`
  font-size: 14px;
`

function Property() {
  const { id } = useParams()
  const property = DataProperty.find((property) => property.id === id)

  return (
    <div>
      <Main>
        <SlideShow pictures={property.pictures} />
        <PropertyWrapper>
          <PropertyTitle>{property.title}</PropertyTitle>
          <PropertyLocation>{property.location}</PropertyLocation>
          {property.tags.map((tags, index) => {
            return <Tags key={index} text={tags} />
          })}
          <Rating value={property.rating} />
          <div>
            <p>{property.host.name}</p>
            <img src={property.host.picture} alt={property.host.name} />
          </div>
        </PropertyWrapper>
        <Collapse title="Description" text={property.description} />
        <Collapse title="Équipements" text={property.equipments} />
      </Main>
      <Footer />
    </div>
  )
}
export default Property
