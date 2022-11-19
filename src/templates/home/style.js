import styled from "styled-components"

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;
  padding: 0 15%;

  @media (max-width: 900px) {
    padding: 10px;
  }
`

export const Header = styled.header`
  flex: 1;
  min-width: 350px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: lighter;
  }
  p {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    padding: 0 10px;
  }
`

export const BrowseButton = styled.button`
  border: none;
  margin-top: 20px;
  padding: 15px 30px;
  background: #0f261f;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`

export const RecipeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  h1 {
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    font-size: 35px;
  }
`

export const BlogsContent = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 100px;

  p {
    margin: 20px 300px;

    @media (max-width: 1600px) {
      margin: 20px;
    }
  }

  button {
    padding: 10px 20px;
    margin: 30px 0;
    border: none;
    background: #0f261f;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
  }
`

export const BlogsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, auto));

  a {
    height: 300px;
    position: relative;
    padding: 10px;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: end;

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`
