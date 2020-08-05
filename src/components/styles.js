import styled from "styled-components"
import { mediaSmall } from "./Screen"

export const MainContainer = styled.div`
  text-align: center;
  max-width: 1760px;
  margin: 0 auto;
  padding: 0 20px;
  background: ${p => p.background || "transparent"};

  ${mediaSmall} {
    padding: 0 80px;
  }
`
