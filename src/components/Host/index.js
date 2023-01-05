import React from 'react'
import styled from 'styled-components'

const SlyledHost = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`
const ImageHost = styled.img`
  border-radius: 50%;
  width: 35px;
  @media (min-width: 992px) {
    width: 60px;
  }
`
const NameHost = styled.span`
  font-size: 13px;
  text-align: right;
  margin-right: 10px;
  @media (min-width: 992px) {
    font-size: 20px;
  }
`
function Host({ name, picture }) {
  return (
    <SlyledHost>
      <NameHost>{name}</NameHost>
      <ImageHost src={picture} alt={name} />
    </SlyledHost>
  )
}
export default Host
