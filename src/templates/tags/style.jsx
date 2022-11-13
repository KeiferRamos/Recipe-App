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

export const RecipeContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, auto));
  gap: 10px;

  a {
    img {
      max-height: 200px;
    }
  }
`
