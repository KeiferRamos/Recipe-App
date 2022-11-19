import styled from "styled-components"

export const StyledFooter = styled.footer`
  position: absolute;
  top: 100%;
  background: #303936;
  width: 100%;
  height: 150px;
  padding: 15px;
  display: grid;
  place-items: center;
  gap: 5px;
  color: #fff;
`

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    cursor: pointer;
    font-size: 11px;
    text-transform: uppercase;

    span {
      margin-left: 10px;
    }
  }

  svg {
    background: #28a21e;
    width: 40px;
    height: 40px;
    padding: 12px;
    border-radius: 50%;
    color: #303936;
    cursor: pointer;
  }
`
