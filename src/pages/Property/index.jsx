// import styled from 'styled-components'
import DataProperty from '../../datas/logements.json'
// import Colors from '../../utils/Colors'
import { Main } from '../../utils/Atoms'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import SlideShow from '../../components/Slider'
import Footer from '../../components/Footer'

function Property() {
  const { id } = useParams()
  const property = DataProperty.find((property) => property.id === id)

  return (
    <div>
      <Main>
        <SlideShow pictures={property.pictures} />
        <h1>{property.title}</h1>
        <p>{property.location}</p>
        {property.tags.map((tags, index) => {
          return <span key={index}>{tags}</span>
        })}
        <Rating value={property.rating} />
        <div>
          <p>{property.host.name}</p>
          <img src={property.host.picture} alt={property.host.name} />
        </div>
        <Collapse title="Description" text={property.description}></Collapse>

        <Collapse
          title="Équipements"
          text={property.equipments + ' '}
        ></Collapse>
      </Main>
      <Footer />
    </div>
  )
}
export default Property
