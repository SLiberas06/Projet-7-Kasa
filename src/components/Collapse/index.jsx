import { useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
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
  width: 90%;
  height: 30px;
  border-radius: 5px;
  background-color: ${Colors.primary};
  margin: 10px 4px 0px;
  padding: 0px 8px;
  @media (min-width: 992px) {
    height: 50px;
    border-radius: 10px;
  }
`
const SectionCollapse = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 0px;
  @media (min-width: 992px) {
    width: 80%;
  }
`

const TitleCollapse = styled.h1`
  font-size: 15px;
  color: ${Colors.textWhite};
  font-weight: 100;
  @media (min-width: 992px) {
    font-size: 22px;
    padding-left: 10px;
    letter-spacing: 1px;
  }
`
const TextCollapse = styled.p`
  background-color: ${Colors.backgroundTextAbout};
  padding: 10px 8px 40px 8px;
  margin-top: 0px;
  border-radius: 5px;
  width: 90%;
  font-size: 14px;
  font-family: ${Fonts.principal};
  font-weight: 200;
  color: ${Colors.primary};
  @media (min-width: 992px) {
    font-size: 22px;
    letter-spacing: 1px;
    height: 100%;
  }
`
const ArrowUp = styled(RiArrowUpSLine)`
  font-size: 30px;
  color: white;
  margin-right: -15px;
  @media (min-width: 992px) {
    font-size: 50px;
  }
`
const ArrowDown = styled(RiArrowDownSLine)`
  font-size: 30px;
  color: white;
  margin-right: -15px;
  @media (min-width: 992px) {
    font-size: 50px;
  }
`

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(true)
  return isOpen ? (
    <SectionCollapse>
      <DivCollapse className="Open">
        <TitleCollapse>{title}</TitleCollapse>
        <ButtonCollapse onClick={() => setIsOpen(false)}>
          <ArrowUp />
        </ButtonCollapse>
      </DivCollapse>
      <TextCollapse>{text}</TextCollapse>
    </SectionCollapse>
  ) : (
    <SectionCollapse>
      <DivCollapse className="Close">
        <TitleCollapse>{title}</TitleCollapse>
        <ButtonCollapse onClick={() => setIsOpen(true)}>
          <ArrowDown />
        </ButtonCollapse>
      </DivCollapse>
    </SectionCollapse>
  )
}
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
}

Collapse.defaultProps = {
  title: 'Title',
  text: 'Text',
}
export default Collapse
