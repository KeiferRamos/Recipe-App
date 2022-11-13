import React, { memo } from "react"
import styled from "styled-components"
import Bg1 from "../../assets/images/food-bg-1.webp"
import Bg2 from "../../assets/images/food-bg-2.webp"
import Bg3 from "../../assets/images/food-bg-3.webp"

export const ImageBg = styled.div`
  display: flex;
  flex: 1;

  img {
    width: 300px;
    max-height: 450px;
    transition: all 0.6s;
  }

  div {
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    img {
      height: 100%;
      width: 100%;
      min-width: 200px;
      object-fit: cover;
    }
  }

  @media (max-width: 1200px) {
    padding: 10px;

    div {
      img {
        min-width: 200px;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0;

    img {
      min-width: auto;
      width: 180px;
    }

    div {
      img {
        min-width: 160px;
      }
    }
  }
`

function BG() {
  return (
    <ImageBg>
      <img src={Bg1} alt="recipe image" />
      <div>
        <img src={Bg2} alt="recipe image" />
        <img src={Bg3} alt="recipe image" />
      </div>
    </ImageBg>
  )
}

export default memo(BG)
