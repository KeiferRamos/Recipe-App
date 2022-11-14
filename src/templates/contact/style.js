import styled from "styled-components"

export const Layout = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 0 15%;

  @media (max-width: 900px) {
    padding: 10px;
  }
`

export const StyledForm = styled.form`
  display: grid;
  width: 500px;
  padding: 20px;
  gap: 20px;

  input,
  textarea {
    border-radius: 5px;
    padding: 0 10px;
    font-family: "Space Mono", monospace;
    border: 1px solid #bebebe;
    font-size: 20px;
  }

  textarea {
    height: 150px;
    padding-top: 10px;
    resize: none;
  }
`

export const SubmitButton = styled.button`
  width: 100px;
  border: none;
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
  margin: 20px 0;
  margin-top: 100px;

  h1 {
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    font-size: 35px;
  }

  div {
    h2 {
      font-size: 25px;
    }

    img {
      width: 100%;
      height: 200px;

      object-fit: cover;
      transition: 0.5s;
    }
  }
`
