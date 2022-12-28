import React from 'react'
import { FaStar } from 'react-icons/fa'
import Colors from '../../utils/Colors'
import styled from 'styled-components'

const FaStarGrey = styled(FaStar)`
  color: ${Colors.FaStarGrey};
`
const FaStarColor = styled(FaStar)`
  color: ${Colors.primary};
`
function Rating({ value }) {
  const stars = [1, 2, 3, 4, 5]
  return (
    <div>
      {stars.map((star) =>
        value >= star ? (
          <FaStarColor key={star.toString()} />
        ) : (
          <FaStarGrey key={star.toString()} />
        )
      )}
    </div>
  )
}
export default Rating
