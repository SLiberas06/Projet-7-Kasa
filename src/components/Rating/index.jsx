import React from 'react'
import { FaStar } from 'react-icons/fa'
import Colors from '../../utils/Colors'
import styled from 'styled-components'

function Rating({ value }) {
  const stars = [1, 2, 3, 4, 5]
  return (
    <div>{stars.map((star) => (value >= star ? <FaStar /> : <FaStar />))}</div>
  )
}
export default Rating
