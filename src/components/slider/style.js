import styled from "styled-components"
import Slider from "react-slick"

export const SliderContainer = styled.div`
  max-height: 360px;
  margin-bottom: 20px;
  width: 100%;

  .mobile-carousel {
    display: none;
  }

  @media (max-width: 600px) {
    .mobile-carousel {
      display: block;
    }
    .desktop-carousel {
      display: none;
    }
  }
`

export const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  position: relative;

  .slick-arrow {
    position: absolute;
    width: 45px;
    height: 45px;
    padding: 5px;
    color: #0f261f;
    top: 40%;
    border-radius: 50%;
    z-index: 100;
    cursor: pointer;
    background-color: #fff;
    top: 30%;
  }

  a {
    border-radius: 0;
  }

  .left {
    left: 5px;
  }

  .right {
    right: 5px;
  }
`
