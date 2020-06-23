import React from "react"
import styled from "styled-components"
import { Services } from "./Services"

const ServiceMap = () => {
  const mappedServices = Services.map((typesOfJobs, i) => {
    return (
      <MainDiv key={i}>
        <img src={typesOfJobs.cover} alt="" />
        <h3>{typesOfJobs.title}</h3>
      </MainDiv>
    )
  })

  return (
    <>
      <MappedDiv>{mappedServices}</MappedDiv>
    </>
  )
}

export default ServiceMap

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  img {
    min-width: 360px;
    position: relative;
    margin-bottom: 0;
  }
  h3 {
    color: #ffffff;
    position: absolute;
    align-self: center;
  }
`
const MappedDiv = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`
