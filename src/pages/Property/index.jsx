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
    font-size: 18px;
    margin-top: 0;
  }
`
const RatingHostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 7%;
  margin-top: 10px;
  @media (min-width: 992px) {
    float: right;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    width: 15vw;
    height: 20vh;
    margin-top: 30px;
    margin-right: 0;
  }
`
const TagsWrapper = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  @media (min-width: 992px) {
    margin-bottom: 10px;
  }
`
const CollapseWrapper = styled.div`
  width: 100%;
  @media (min-width: 992px) {
    width: 91%;
    height: 30%;
    flex-direction: row;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

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
            <TagsWrapper>
              {property.tags.map((tags, index) => {
                return <Tags key={index} text={tags} />
              })}
            </TagsWrapper>
          </div>
          <RatingHostWrapper>
            <Rating value={property.rating} />
            <Host name={property.host.name} picture={property.host.picture} />
          </RatingHostWrapper>
        </PropertyWrapper>
        <CollapseWrapper>
          <Collapse title="Description" text={property.description} />
          <Collapse
            title="Équipements"
            text={property.equipments.map((equipment, index) => {
              return (
                <span key={index}>
                  {equipment}
                  <br />
                </span>
              )
            })}
          />
        </CollapseWrapper>
      </Main>
      <Footer />
    </div>
  )
}
export default Property
