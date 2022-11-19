import styled from "styled-components"

export const Layout = styled.section`
  padding: 0 15%;

  @media (max-width: 900px) {
    padding: 10px;
  }
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 500px auto;
  grid-template-rows: 1fr auto;
  gap: 20px;
  padding: 10px 0;

  div {
    h1 {
      font-size: 35px;
    }
  }

  .gatsby-image-wrapper {
    width: 500px;
    object-fit: cover;
    grid-row: span 2;
  }

  @media (max-width: 1450px) {
    grid-template-columns: 500px auto;
    grid-template-rows: 1fr auto;

    .gatsby-image-wrapper {
      width: 100%;
      height: 300px;
      object-fit: cover;
      grid-row: span 1;
    }
  }

  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto auto;
    gap: 5px;

    img {
      grid-row: span 2;
    }
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 10px;

  h2 {
    display: block;
    width: 100%;
  }

  a {
    display: inline;
    border: 1px solid #303936;
    padding: 10px 15px;
    font-size: 15px !important;
    cursor: pointer;
  }

  @media (max-width: 1450px) {
    grid-column: span 2;
    margin-top: 0;
  }

  @media (max-width: 1150px) {
    grid-column: span 1;
    margin-top: 0;
  }
`

export const RecipeList = styled.div`
  width: 100%;
  display: grid;
  padding: 15px 0;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 10px;
`

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  gap: 5px;

  a {
    border: 1px solid;
    color: #303936;
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    border-radius: 3px;
  }

  .selected {
    scale: 1.1;
    background: #303936;
    color: #fff;
    border: none;
  }
`
