import Banner from '../../components/Banner'
import Card from '../../components/Card'
import styled from 'styled-components'
import DataProperty from '../../datas/logements.json'

const HomeContainer = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function Home() {
  return (
    <HomeContainer>
      <Banner />
      {DataProperty.map((property, index) => (
        <Card
        // key={`${property.id}`}
        // title={property.title}
        // cover={`${property.cover}`}
        />
      ))}
    </HomeContainer>
  )
}

export default Home
