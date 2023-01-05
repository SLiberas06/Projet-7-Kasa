// import styled from 'styled-components'
import DataProperty from '../../datas/logements.json'
import Colors from '../../utils/Colors'
import styled from 'styled-components'
import { Main } from '../../utils/Atoms'
import { useParams, Routes, Route } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Slider from '../../components/Slider'
import Footer from '../../components/Footer'
import Fonts from '../../utils/Atoms'
import Tags from '../../components/Tags'
import Error from '../Error'
import Host from '../../components/Host'

const PropertyWrapper = styled.div`
  margin-left: 7vw;
  width: 100%;
  font-family: ${Fonts.principal};
  color: ${Colors.primary};
  @media (min-width: 992px) {
    width: 85vw;
    margin-left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
const PropertyTitle = styled.h1`
  font-size: 18px;
  font-weight: 100;
  text-align: left;
  letter-spacing: 0.8px;
  width: 100%;
  @media (min-width: 992px) {
    font-size: 35px;
    margin-bottom: 10px;
  }
`
const PropertyLocation = styled.p`
  font-size: 14px;
  @media (min-width: 992px) {
    font-size: 20px;
    margin-top: 0;
  }
`
const RatingHostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 7%;
  margin-top: 20px;
  @media (min-width: 992px) {
    float: right;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    width: 15vw;
    height: 30vh;
    margin: 0;
  }
`
// const CollapseWrapper = styled(Collapse)`
//   @media (min-width: 992px) {
//     width: 50%;
//     flex-wrap: nowrap;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     background-color: red;
//   }
// `
function Property() {
  const { id } = useParams()
  const property = DataProperty.find((property) => property.id === id)
  if (!property) {
    return (
      <Routes>
        <Route path="*" element={<Error />} />
      </Routes>
    )
  }
  return (
    <div>
      <Main>
        <Slider pictures={property.pictures} />
        <PropertyWrapper>
          <div>
            <PropertyTitle>{property.title}</PropertyTitle>
            <PropertyLocation>{property.location}</PropertyLocation>
            {property.tags.map((tags, index) => {
              return <Tags key={index} text={tags} />
            })}
          </div>
          <RatingHostWrapper>
            <Rating value={property.rating} />
            <Host name={property.host.name} picture={property.host.picture} />
          </RatingHostWrapper>
        </PropertyWrapper>
        <Collapse title="Description" text={property.description} />
        <Collapse
          title="Équipements"
          text={property.equipments.map((equipment, index) => {
            return (
              <span key={index}>
                {equipment} <br />
              </span>
            )
          })}
        />
      </Main>
      <Footer />
    </div>
  )
}
export default Property
