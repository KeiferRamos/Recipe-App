import React, { memo, useState } from "react"
import "../../assets/style/slick-theme.css"
import { StyledSlider, SliderContainer } from "./style"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import RecipeDisplay from "../recipe/index"

function SliderComp({ items = [] }) {
  const LeftNavButton = ({ onClick }) => (
    <FiChevronLeft className="slick-arrow left" onClick={onClick} />
  )

  const RightNavButton = ({ onClick }) => (
    <FiChevronRight className="slick-arrow right" onClick={onClick} />
  )

  const settingsForDesktop = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <LeftNavButton />,
    nextArrow: <RightNavButton />,
  }

  const settingsForMobile = {
    ...settingsForDesktop,
    slidesToShow: 1,
  }

  return (
    <SliderContainer>
      <StyledSlider {...settingsForDesktop} className="desktop-carousel">
        {items.map((item, i) => (
          <RecipeDisplay data-index={i} key={i} {...item} />
        ))}
      </StyledSlider>
      <StyledSlider {...settingsForMobile} className="mobile-carousel">
        {items.map((item, i) => (
          <RecipeDisplay data-index={i} key={i} {...item} />
        ))}
      </StyledSlider>
    </SliderContainer>
  )
}

export default memo(SliderComp)
