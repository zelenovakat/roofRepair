import React from "react"
import styled from "styled-components"
import heroImg from "../images/hero.jpg"
import Button from "../components/Button"
import { activeBlue } from "../components/colors"
import ServiceMap from "../components/firstPage/ServiceMap"
import LowerPart from "../components/firstPage/LowerPart"
import { MainContainer } from "../components/styles"
import { title } from "../utils/mixins"
import ProjectsSlider from "../components/ProjectsSlider"
import { mediaSmall } from "../components/Screen"

const PageOne = () => {
  return (
    <div>
      <HeroSection>
        <Title>Asti Tak & Bygg</Title>
        <Subtitle>
          Tryggt och säkert tak många år framöver. <b>GARANTI</b> på ditt nya
          tak
        </Subtitle>
        <Button>KONTAKTA OSS</Button>
      </HeroSection>

      <CalloutSection>
        <MainContainer>
          <CalloutTitle>
            Vill du ha hjälp av våra proffsiga takläggare?
          </CalloutTitle>
          <p>
            Vi är en fullservice takläggning firma med lång erfarenhet och kan
            garantera ett perfekt utförande i varje projekt som vi antar. Asti
            Tak & Bygg arbetar med olika lösningar och metoder för att
            säkerställa ett gott slutresultat som överensstämmer med kundens
            önskemål och budget. Med marknadens bästa material får du ett tak
            som skyddar din fastighet i många år! Just nu erbjuder vi ett
            kostnadsfritt hembesök inom Stockholm, Uppsala, Valentuna och
            Bålsta.
          </p>
        </MainContainer>
      </CalloutSection>

      <ServiceSection>
        <ServiceTitle>Vära tjänster</ServiceTitle>
        <ServiceMap />
      </ServiceSection>

      <CommonSection>
        <MainContainer>
          <WowTitle>Så här jobbar vi</WowTitle>
          <p>
            Vi lägger alla former av tak oavsett storlek. Villatak, garagetak,
            industritak med material såsom betongpannor, taktegel, trp plåt,
            råspont. Förutom det utför vi också arbeten inom takavvatning,
            montering av takluckor, takfönster, isolering och taksäkerhet.
          </p>
          <LowerPart />
        </MainContainer>
      </CommonSection>

      {typeof window !== "undefined" && (
        <CommonSection>
          <MainContainer>
            <WowTitle>Referensprojekt</WowTitle>
            <ProjectsSlider />
          </MainContainer>
        </CommonSection>
      )}
    </div>
  )
}

export default PageOne

const CalloutSection = styled.div`
  padding: 60px 0;
  color: #fff;
  background-color: ${activeBlue};
`

const CalloutTitle = styled.h3`
  ${title};
  margin-bottom: 16px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
`

const ServiceSection = styled.section`
  padding: 60px 0 0;
`

const ServiceTitle = styled.h4`
  ${title};
  margin-bottom: 60px;
  text-align: center;
  text-transform: uppercase;
`

const CommonSection = styled.section`
  padding: 60px 0 0;
`

const WowTitle = styled.h4`
  ${title};
  margin-bottom: 60px;
  text-align: center;
  text-transform: uppercase;
`

const HeroSection = styled.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${heroImg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 2;
  padding: 160px 0;

  h3 {
    color: #ffffff;
  }
`
const Title = styled.h1`
  color: #fff;
  font-size: 34px;
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: light;
`

const Subtitle = styled.h2`
  margin-bottom: 30px;
  color: #fff;
  padding: 0 20px;
  text-align: center;
  font-size: 18px;

  ${mediaSmall} {
    font-size: 24px;
  }
`
