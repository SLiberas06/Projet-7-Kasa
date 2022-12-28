import styled from 'styled-components'
import DataProperty from '../../datas/logements.json'
import Colors from '../../utils/Colors'
import { Main } from '../../utils/Atoms'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Carrousel from '../../components/Carrousel'
import Footer from '../../components/Footer'

function Property() {
  const { id } = useParams()
  const property = DataProperty.find((property) => property.id === id)
  const {
    cover,
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = property

  return (
    <div>
      <Main>
        <img src={cover} alt={title} />
        <h1>{title}</h1>
        <p>{location}</p>
        <ul>
          {tags.map((tags, index) => {
            return <li key={index}>{tags}</li>
          })}
        </ul>
        <p>{rating}</p>
        <img src={host.picture} alt={host.name} />
        <Collapse title="Description" text={description}></Collapse>

        <Collapse title="Équipements" text={equipments + ' '}></Collapse>
      </Main>
      <Footer />
    </div>
  )
}
export default Property
