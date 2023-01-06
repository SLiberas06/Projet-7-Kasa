import React from 'react'
import { MdStarRate } from 'react-icons/md'
import Colors from '../../utils/Colors'
import styled from 'styled-components'

const FaStarGrey = styled(MdStarRate)`
  color: ${Colors.FaStarGrey};
  font-size: 18px;
  @media (min-width: 992px) {
    font-size: 35px;
    margin-left: 3px;
  }
`
const FaStarColor = styled(MdStarRate)`
  color: ${Colors.primary};
  font-size: 18px;
  @media (min-width: 992px) {
    font-size: 35px;
    margin-left: 3px;
  }
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
