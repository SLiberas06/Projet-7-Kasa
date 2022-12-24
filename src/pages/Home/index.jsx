import HomeBanner from '../../components/HomeBanner'
import Card from '../../components/Card'
import styled from 'styled-components'
import DataProperty from '../../datas/logements.json'
import Colors from '../../utils/Colors'
import ImageHomeBanner from '../../assets/Banner_Home_D.png'
import { Body } from '../../utils/Atoms'

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
    <Body>
      <HomeBanner cover={ImageHomeBanner} />
      <CardWrapper>
        {DataProperty.map((property) => (
          <Card
            key={`${property.id}`}
            title={property.title}
            cover={`${property.cover}`}
            // to={`/property/`}
          />
        ))}
      </CardWrapper>
    </Body>
  )
}

export default Home
