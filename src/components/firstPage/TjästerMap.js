import React from "react"
import styled from "styled-components"
import { Tjänster } from "./Tjänster"

const TjänsterMap = () => {
  const mappedTjänster = Tjänster.map((typesOfJobs, i) => {
    return (
      <MainDiv key={i}>
        <img src={typesOfJobs.cover} alt="" />
        <h3>{typesOfJobs.title}</h3>
      </MainDiv>
    )
  })

  return (
    <>
      <MappedDiv>{mappedTjänster}</MappedDiv>
    </>
  )
}

export default TjänsterMap

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  img {
    min-width: 360px;
    position: relative;
    margin-bottom: 0;
  }
  h3 {
    color: white;
    position: absolute;
    align-self: center;
  }
`
const MappedDiv = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`
