import React from 'react'
import Colors from '../../utils/Colors'
import styled from 'styled-components'

const TagsStyled = styled.div`
  color: ${Colors.textWhite};
  background-color: ${Colors.primary};
  width: 23vw;
  height: 15px;
  font-size: 9px;
  border-radius: 4px;
  margin-right: 10px;
  text-align: center;
  padding: 4px 3px 0px 3px;
  font-weight: 100;
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
