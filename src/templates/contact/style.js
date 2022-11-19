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
    background: #e3e8e4;
    box-shadow: inset 5px 5px 10px #d8dcd9, inset -5px -5px 10px #eef4ef;
    border-radius: 5px;
    padding: 0 10px;
    font-family: "Space Mono", monospace;
    font-size: 20px;
    border: none;
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
