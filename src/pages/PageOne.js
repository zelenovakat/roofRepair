import React from "react"
import styled from "styled-components"
import house9Img from "../components/firstPage/images/house9.jpeg"
import StyleButton from "../components/Button"
import { vf, th } from "../components/colors"
import TjänsterMap from "../components/firstPage/TjästerMap"
import LowerPart from "../components/firstPage/LowerPart"
const PageOne = () => {
  return (
    <Div>
      <MainDiv>
        <Title>Välkommen till Tak & Plåt</Title>
        <h3>Våra proffsiga takläggare hjälper dig</h3>
        <StyleButton type="button">Kontakta oss</StyleButton>
      </MainDiv>
      <Text>
        <h2>
          VILL DU HA HJÄLP AV VÅRA PROFFSIGA TAKLÄGGARE ELLER PLÅTSLAGARE?
        </h2>
        <h5>
          Tak och Plåt AB är en takläggningsfirma som tack vare 30 stycken
          anställda, alla elfarna och kunniga licenserade takläggare och
          plåtslagare, ger ditt hem en komplett takrenovering anda upp till
          nocken. Dock begränsar vi oss inte enbart till takrenovering, takpapp
          och underhåll av tak utan lägger också focus på övriga byggtjänster,
          markismonterning, flyttjänster och bemanningsverksamhet. Detta för att
          nå ut till en så stor kundkrets som möjligt och erbjuda vär expertis
          inom en rad yrkesområden.
        </h5>
      </Text>
      <h1>Vära tjänster</h1>
      <Tjänster>
        <TjänsterMap />
      </Tjänster>
      <LowerText>SÅ HÅR JOBBAR VI</LowerText>
      <h4>Altid kanstnadsfia offerter och hembesök!</h4>
      <Part>
        <LowerPart />
      </Part>
    </Div>
  )
}

export default PageOne

const Part = styled.div``

const LowerText = styled.h1`
  color: ${th};
`

const Div = styled.div`
  h1 {
    text-align: center;
    padding-top: 10px;
  }
  h4 {
    text-align: center;
  }
`

const Tjänster = styled.div``

const Text = styled.div`
  text-align: center;
  color: #ffff;
  background-color: ${vf};
  h2 {
    padding-top: 50px;
  }
  h5 {
    padding-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
  }
`
const Title = styled.h1`
  margin-top: 100px;
  color: #ffff;
  font-size: 35px;
`
const MainDiv = styled.div`
  background-repeat: no-repeat;
  background-position: center;

  background-image: url(${house9Img});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #ffff;
  }

  button {
    margin-bottom: 100px;
  }
`
