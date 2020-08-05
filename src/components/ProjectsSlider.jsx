import React, { useEffect } from "react"
import styled from "styled-components"
import { mediaSmall } from "./Screen"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/themes/splide-default.min.css"
import { useRef } from "react"

function importAll(r) {
  return r.keys().map(r)
}

const projectImgs = importAll(
  require.context("../images/projects", false, /\.jpe?g$/)
)

const ProjectsSlider = () => {
  const primarySliderRef = useRef()
  const thumbnailsRef = useRef()

  useEffect(() => {
    primarySliderRef.current.sync(thumbnailsRef.current.splide)
  }, [])

  const mainOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    lazyload: "nearby",
    breakpoints: {
      640: {
        width: "100%",
      },
      2048: {
        width: 600,
      },
    },
  }

  const thumbnailsOptions = {
    type: "slide",
    rewind: true,
    width: 800,
    gap: "10px",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
    updateOnMove: true,
    arrows: false,
  }

  return (
    <GalleryContainer>
      <Splide options={mainOptions} ref={primarySliderRef}>
        {projectImgs.map((projectImg, i) => (
          <SplideSlide key={`main_${i}`}>
            <StyledMainImage
              src={projectImg}
              alt={`Referensprojekt #${i + 1}`}
            />
          </SplideSlide>
        ))}
      </Splide>

      <ThumbnailsContainer>
        <Splide options={thumbnailsOptions} ref={thumbnailsRef}>
          {projectImgs.map((projectImg, i) => (
            <SplideSlide key={`thumbnail_${i}`}>
              <img src={projectImg} alt={`Referensprojekt #${i + 1}`} />
            </SplideSlide>
          ))}
        </Splide>
      </ThumbnailsContainer>
    </GalleryContainer>
  )
}

export default ProjectsSlider

const StyledMainImage = styled.img`
  width: 100%;

  ${mediaSmall} {
  }
`

const ThumbnailsContainer = styled.div`
  margin-top: 20px;
`

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-bottom: 100px;
`