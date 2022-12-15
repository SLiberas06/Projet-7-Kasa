import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import styled from 'styled-components'
import Fonts from '../../utils/Atoms'
import Colors from '../../utils/Colors'
import PropTypes from 'prop-types'

const ButtonCollapse = styled.button`
  border: none;
  background-color: transparent;
  padding: 10px;
`
const DivCollapse = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  font-family: ${Fonts.principal};
  width: 320px;
  height: 30px;
  border-radius: 5px;
  background-color: ${Colors.primary};
  margin: 10px 3px;
  padding: 0px 8px;
`
const SectionCollapse = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const TitleCollapse = styled.h1`
  font-size: 15px;
  color: ${Colors.textWhite};
  font-weight: 100;
`
const TextCollapse = styled.p`
  background-color: ${Colors.backgroundTextAbout};
  padding: 10px 10px 40px 10px;
  margin-top: -10px;
  border-radius: 5px;
  font-size: 14px;
  font-family: ${Fonts.principal};
  color: ${Colors.primary};
`

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(true)
  return isOpen ? (
    <SectionCollapse>
      <DivCollapse className="Open">
        <TitleCollapse>{title}</TitleCollapse>
        <ButtonCollapse onClick={() => setIsOpen(false)}>
          <FaChevronUp font-size="20px" color="white" />
        </ButtonCollapse>
      </DivCollapse>
      <TextCollapse>{text}</TextCollapse>
    </SectionCollapse>
  ) : (
    <SectionCollapse>
      <DivCollapse className="Close">
        <TitleCollapse>{title}</TitleCollapse>
        <ButtonCollapse onClick={() => setIsOpen(true)}>
          <FaChevronDown font-size="20px" color="white" />
        </ButtonCollapse>
      </DivCollapse>
    </SectionCollapse>
  )
}
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

Collapse.defaultProps = {
  title: 'Title',
  text: 'Text',
}
export default Collapse
