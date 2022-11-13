import styled from "styled-components";

export const Layout = styled.div`
  padding: 0 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1400px) {
    padding: 0 15%;
  }

  @media (max-width: 900px) {
    padding: 0 20px;
  }

  h1,
  h2 {
    font-size: 35px;
    text-align: center;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 25px;
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
`;

export const StyledDiv = styled.div`
  display: grid;
  place-items: center;
  text-align: center;

  p {
    max-width: 650px;
    margin-bottom: 20px;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;

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
`;
