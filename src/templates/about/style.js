import styled from "styled-components"

export const Layout = styled.div`
  padding: 0 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 0 10px;
  }

  article {
    background: #35373f;
    color: #bebebe;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;

    h3 {
      background: #665465;
      border-radius: 5px;
      margin-bottom: 10px;
      padding: 10px;
      display: inline-block;
    }
  }

  h1 {
    font-size: 20px;
    margin-bottom: 30px;
    text-transform: uppercase;
    background: #35373f;
    border-radius: 5px;
    padding: 10px 30px;
    color: #bebebe;
  }

  h2 {
    width: 100%;
    font-size: 30px;
    margin-bottom: 30px;
  }

  section {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(340px, auto));
    gap: 10px;
  }

  span {
    border-bottom: 1px dashed #bebebe;
    margin: 40px 0;
  }

  img {
    height: 400px;
    object-fit: cover;

    @media (max-width: 500px) {
      height: 300px;
    }
  }
`

export const StyledDiv = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  gap: 10px;

  img {
    width: 100px;
    height: 100px;
  }
`

export const PersonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  div {
    text-align: center;
    width: 300px;

    img {
      width: 250px;
      height: 250px;
    }
  }
`
