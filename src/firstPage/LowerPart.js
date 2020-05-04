import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faFileSignature } from "@fortawesome/free-solid-svg-icons"
import { faCalculator } from "@fortawesome/free-solid-svg-icons"
import { faCity } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { Link } from "gatsby"
import { th } from "../components/colors"
const LowerPart = () => {
  return (
    <MainDiv>
      <BorderDiv>
        <FontAwesomeIcon icon={faMobileAlt} />
        <Menu>
          <li>
            <WrapperLink to="/">KONTAKTA OSS</WrapperLink>
          </li>
        </Menu>
        <h6>STEG 1</h6>
        <h5>Du behöver skriva en kort beskrivning på vad ni vill ha utfört</h5>
      </BorderDiv>
      <BorderDiv>
        <FontAwesomeIcon icon={faHome} />
        <Menu>
          <li>
            <WrapperLink to="/">PLATSBESÖK</WrapperLink>
          </li>
        </Menu>
        <h6>STEG 2</h6>
        <h5>
          Vi går igenom hur det ser ut idag och vilket slutresultat ni förväntar
          er
        </h5>
      </BorderDiv>
      <BorderDiv>
        <FontAwesomeIcon icon={faFileSignature} />
        <Menu>
          <li>
            <WrapperLink to="/">OFFERT</WrapperLink>
          </li>
        </Menu>
        <h6>STEG 3</h6>
        <h5>
          Efter det kommer vi överens med dig vad som behöver göras och vilka
          material som du vill använda lämnar vi en offert till dig
        </h5>
      </BorderDiv>
      <BorderDiv>
        <FontAwesomeIcon icon={faCalculator} />
        <Menu>
          <li>
            <WrapperLink to="/">BETALNINGSPLAN</WrapperLink>
          </li>
        </Menu>
        <h6>STEG 4</h6>
        <h5>Vi presenterar tidplanen och går igenom processen steg för steg</h5>
      </BorderDiv>
      <BorderDiv>
        <FontAwesomeIcon icon={faCity} />
        <Menu>
          <li>
            <WrapperLink to="/">BYGGET SÄTTS IGÅNG</WrapperLink>
          </li>
        </Menu>
        <h6>STEG 5</h6>
        <h5>Arbetet startar</h5>
      </BorderDiv>
      <BorderDiv>
        <FontAwesomeIcon icon={faSearch} />
        <Menu>
          <li>
            <WrapperLink to="/">SLUTBESIKTNING</WrapperLink>
          </li>
        </Menu>
        <h6>STEG 6</h6>
        <h5>Besiktning och avslut</h5>
      </BorderDiv>
    </MainDiv>
  )
}

export default LowerPart
const WrapperLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
`
const BorderDiv = styled.div`
  border: 3px solid #f5f5f5;
  border-radius: 30px;
  width: 350px;
  padding: 20px;
  margin: 20px;
  svg {
    margin-bottom: 20px;
  }
  h6 {
    margin-bottom: 5px;
    color: #818181;
  }
  h5 {
    font-weight: normal;
  }
`
const MainDiv = styled.div`
  flex-wrap: wrap;
  display: flex;
  text-align: center;
  justify-content: center;
  svg {
    font-size: 50px;
    color: ${th};
  }
`
const Menu = styled.ul`
  font-size: 20px;
  font-family: Rokkitt, serif;
  margin-bottom: 0px;
  li {
    list-style-type: none;
    margin-bottom: 5px;
  }
  a {
    color: #000000;
    font-weight: bold;
  }
`
