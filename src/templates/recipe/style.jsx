import styled from "styled-components"

export const Layout = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  padding: 0 15%;

  @media (max-width: 900px) {
    padding: 10px;
  }
`

export const Header = styled.header`
  height: 100%;
  display: grid;
  grid-template-columns: 500px auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #2c434a;
  gap: 20px;

  img {
    max-width: 500px;
    max-height: 350px;
  }

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    img {
      width: 100%;
    }
  }

  div {
    min-width: 340px;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 30px;
    }

    section {
      margin-top: auto;
    }

    p {
      margin-top: 10px;
    }
  }
`

export const Instruction = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  gap: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: auto;
  }
`

export const Ingredients = styled.div`
  p {
    border: 1px solid #bebebe;
    padding: 10px;
    margin-bottom: 10px;
  }
`

export const Method = styled.div`
  div {
    display: flex;
    align-items: start;
    gap: 20px;
    margin-bottom: 20px;

    span {
      width: 30px;
      height: 30px;
      line-height: 30px;
      min-width: 30px;
      font-size: 11px;
      border-radius: 50%;
      text-align: center;
      color: #fff;
      background: #2c434a;
    }

    p {
      display: inline;
    }
  }
`

export const ShareContainer = styled.section`
  margin-top: auto;

  svg {
    width: 40px;
    height: 40px;
  }
`
