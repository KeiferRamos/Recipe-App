import React from "react"
import styled from "styled-components"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import ArrowUp from "../components/arrow-up"

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  padding: 0 15%;

  @media (max-width: 900px) {
    padding: 10px;
  }
`

function Wrapper({ children }) {
  return (
    <div className="App">
      <NavBar />
      {children}
      <Footer />
      <ArrowUp />
    </div>
  )
}

export default Wrapper
