import Banner from '../../components/Banner'
import Card from '../../components/Card'
import styled from 'styled-components'
import DataProperty from '../../datas/logements.json'
import Colors from '../../utils/Colors'
import ImageBanner from '../../assets/Banner_Home_D.png'

const HomeContainer = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const CardWrapper = styled.section`
  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90%;
    height: 100%;
    background-color: ${Colors.CardWrapper};
    margin: 50px 0 50px 0;
    padding: 30px 0 0 0;
    border-radius: 25px;
  }
`

function Home() {
  return (
    <HomeContainer>
      <Banner cover={ImageBanner} />
      <CardWrapper>
        {DataProperty.map((property, index) => (
          <Card
            key={`${property.id}`}
            title={property.title}
            cover={`${property.cover}`}
          />
        ))}
      </CardWrapper>
    </HomeContainer>
  )
}

export default Home
