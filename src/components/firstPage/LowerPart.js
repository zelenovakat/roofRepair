import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { Link } from "gatsby"

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
        <h5>STEG 1</h5>
        <h6>Du behöver skriva en kort beskrivning på vad ni vill ha utfört</h6>
      </BorderDiv>
      <BorderDiv>
        <FontAwesomeIcon icon={faMobileAlt} />
        <Menu>
          <li>
            <WrapperLink to="/">PLATSBESÖK</WrapperLink>
          </li>
        </Menu>
        <h5>STEG 2</h5>
        <h6>
          Vi går igenom hur det ser ut idag och vilket slutresultat ni förväntar
          er
        </h6>
      </BorderDiv>
      <BorderDiv>
        <FontAwesomeIcon icon={faMobileAlt} />
        <Menu>
          <li>
            <WrapperLink to="/">OFFERT</WrapperLink>
          </li>
        </Menu>
        <h5>STEG 3</h5>
        <h6>
          Efter det kommer vi överens med dig vad som behöver göras och vilka
          material som du vill använda lämnar vi en offert till dig
        </h6>
      </BorderDiv>
      <BorderDiv>
        <FontAwesomeIcon icon={faMobileAlt} />
        <Menu>
          <li>
            <WrapperLink to="/">BETALNINGSPLAN</WrapperLink>
          </li>
        </Menu>
        <h5>STEG 4</h5>
        <h6>Vi presenterar tidplanen och går igenom processen steg för steg</h6>
      </BorderDiv>
      <BorderDiv>
        <FontAwesomeIcon icon={faMobileAlt} />
        <Menu>
          <li>
            <WrapperLink to="/">BYGGET SÄTTS IGÅNG</WrapperLink>
          </li>
        </Menu>
        <h5>STEG 5</h5>
        <h6>Arbetet startar</h6>
      </BorderDiv>
      <BorderDiv>
        <FontAwesomeIcon icon={faMobileAlt} />
        <Menu>
          <li>
            <WrapperLink to="/">SLUTBESIKTNING</WrapperLink>
          </li>
        </Menu>
        <h5>STEG 6</h5>
        <h6>Besiktning och avslut</h6>
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
  border: 1px solid black;
  margin: 15px;
  border-radius: 30px;
  width: 300px;
`
const MainDiv = styled.div`
  flex-wrap: wrap;
  display: flex;
  text-align: center;

  justify-content: center;
  svg {
    font-size: 50px;
  }
`
const Menu = styled.ul`
  font-size: 20px;
  font-family: Rokkitt, serif;
  li {
    list-style-type: none;
  }
`
