import styled from "styled-components"

export const Layout = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 15%;
  padding-bottom: 20px;

  @media (max-width: 900px) {
    padding: 10px;
  }

  h1 {
    width: 100%;
  }
`

export const Title = styled.h1`
  text-align: center;
  padding-bottom: 20px;
  font-size: 30px;
`

export const Subtitle = styled.h2`
  width: 100%;
`
