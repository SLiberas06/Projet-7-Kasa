import React from 'react'
import Colors from '../../utils/Colors'
import styled from 'styled-components'

const TagsStyled = styled.div`
  color: ${Colors.textWhite};
  background-color: ${Colors.primary};
  width: 60px;
  height: 10px;
  font-size: 10px;
  border-radius: 4px;
  margin: 5px 10px 0px 0px;
  text-align: center;
  padding: 4px 10px 4px;
  font-weight: 100;
  display: inline;
  flex-wrap: nowrap;
  letter-spacing: 0.5px;
  @media (min-width: 992px) {
    font-size: 15px;
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
`
function Tags({ text }) {
  return <TagsStyled>{text}</TagsStyled>
}

export default Tags
