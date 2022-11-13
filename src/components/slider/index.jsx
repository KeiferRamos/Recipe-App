import React, { memo, useState } from "react"
import "../../assets/style/slick-theme.css"
import { StyledSlider } from "./style"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import RecipeDisplay from "../recipe/index"

function SliderComp({ items = [] }) {
  const [screenWidth] = useState(document.documentElement.clientWidth)

  const LeftNavButton = ({ onClick }) => (
    <FiChevronLeft className="slick-arrow left" onClick={onClick} />
  )

  const RightNavButton = ({ onClick }) => (
    <FiChevronRight className="slick-arrow right" onClick={onClick} />
  )

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: screenWidth >= 1400 ? 3 : screenWidth > 700 ? 2 : 1,
    slidesToScroll: 1,
    prevArrow: <LeftNavButton />,
    nextArrow: <RightNavButton />,
  }

  return (
    <StyledSlider {...settings}>
      {items.map((item, i) => (
        <RecipeDisplay data-index={i} key={i} {...item} />
      ))}
    </StyledSlider>
  )
}

export default memo(SliderComp)
