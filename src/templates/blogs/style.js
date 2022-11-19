import styled from "styled-components"

export const Layout = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
  padding: 0 15%;

  @media (max-width: 900px) {
    padding: 10px;
  }

  h1 {
    width: 100%;
  }
`

export const BlogsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, auto));
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    margin-bottom: 10px;
  }

  a {
    height: 300px;
    position: relative;
    padding: 10px;
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: end;
    border-radius: 5px;
    overflow: hidden;

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
