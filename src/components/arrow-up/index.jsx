import React, { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"
import styled from "styled-components"

const StyledArrow = styled.span`
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.2);
  padding: 10px;
  font-size: 20px;
`

function ArrowUp() {
  const [top, setTop] = useState(window.pageYOffset)

  useEffect(() => {
    function eventHandler() {
      setTop(window.pageYOffset)
    }

    document.addEventListener("scroll", eventHandler)
    return () => document.removeEventListener("scroll", eventHandler)
  }, [])

  if (top > 200) {
    return (
      <StyledArrow onClick={() => window.scroll({ top: 0, left: 0 })}>
        <FaArrowUp />
      </StyledArrow>
    )
  } else {
    return null
  }
}

export default ArrowUp
