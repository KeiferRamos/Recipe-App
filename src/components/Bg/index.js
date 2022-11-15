import React, { memo } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export const ImageBg = styled.div`
  display: flex;
  flex: 1;

  div {
    .gatsby-image-wrapper {
      height: 500px;
      width: 300px;
    }
  }

  section {
    display: grid;
    grid-template-rows: 1fr 1.5fr;
  }

  @media (max-width: 1200px) {
    padding: 10px;
    width: 100%;
    flex: auto;
  }

  @media (max-width: 600px) {
    padding: 0;

    div {
      .gatsby-image-wrapper {
        height: 300px;
        width: 150px;
      }
    }
  }
`

function BG() {
  return (
    <ImageBg>
      <div>
        <StaticImage
          src="../../assets/images/food-bg-1.webp"
          alt="recipe image"
          placeholder="dominantColor"
          layout="constrained"
        />
      </div>
      <section>
        <StaticImage
          src="../../assets/images/food-bg-2.webp"
          alt="recipe image"
          placeholder="dominantColor"
          layout="constrained"
        />
        <StaticImage
          src="../../assets/images/food-bg-3.webp"
          alt="recipe image"
          placeholder="dominantColor"
          layout="constrained"
        />
      </section>
    </ImageBg>
  )
}

export default memo(BG)
