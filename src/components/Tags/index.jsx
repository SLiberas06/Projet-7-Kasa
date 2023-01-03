import React from 'react'
import Colors from '../../utils/Colors'
import styled from 'styled-components'

const TagsWrapper = styled.div`
  background-color: red;
  height: 3vh;
  width: 100%;
  align-items: center;
  display: inline;
`
const TagsStyled = styled.div`
  color: ${Colors.textWhite};
  background-color: ${Colors.primary};

  width: 80px;
  font-size: 12px;
  border-radius: 4px;

  p {
    text-align: center;
    padding: 1px;
    font-weight: 100;
  }
`
function Tags(props) {
  return (
    <TagsWrapper>
      <TagsStyled key={props.id}>
        <p>{props.text}</p>
      </TagsStyled>
    </TagsWrapper>
  )
}

export default Tags
