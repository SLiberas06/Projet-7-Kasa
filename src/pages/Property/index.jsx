import styled from 'styled-components'
import DataProperty from '../../datas/logements.json'
import Colors from '../../utils/Colors'
import { Main } from '../../utils/Atoms'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'

function Property() {
  const { propertyId } = useParams()
  const property = DataProperty.find((property) => property.id === propertyId)
  const {
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
    <Main>
      <h1>{title}</h1>
      <Rating />
      <Collapse title="description" text={description}></Collapse>
      <Collapse title="équipement" text={equipments + '  '}></Collapse>
    </Main>
  )
}
export default Property
