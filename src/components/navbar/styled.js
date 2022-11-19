import styled from "styled-components"

export const Navbar = styled.nav`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 15%;

  .toggler {
    display: none;
  }

  @media (max-width: 500px) {
    .toggler {
      display: block;
    }
  }

  @media (max-width: 900px) {
    padding: 10px;
  }

  svg {
    font-size: 25px;
    cursor: pointer;
  }

  .show {
    height: auto;
    padding: 10px;
  }

  @media (max-width: 900px) {
    padding: 0 20px;
  }
`

export const Title = styled.h1`
  position: relative;
  font-family: "Space Mono", monospace;
  padding-bottom: 3px;
  font-weight: lighter;
  cursor: pointer;
  transition: all 0.6s;

  ::before {
    content: "";
    position: absolute;
    width: 30%;
    height: 3px;
    left: 0;
    bottom: 0;
    background: #52d96b;
    transition: all 0.6s;
  }

  ::after {
    content: "";
    position: absolute;
    width: 65%;
    height: 3px;
    right: 0;
    bottom: 0;
    background: #52d96b;
    transition: all 0.6s;
  }

  :hover {
    color: #0e3d12;

    ::after,
    ::before {
      background: #0e3d12;
    }

    ::after {
      width: 30%;
    }

    ::before {
      width: 65%;
    }
  }
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 10px;
  color: #565a5c;

  .active {
    background: #35373f;
    color: #bebebe;
    padding: 5px 10px;
    border-radius: 3px;
  }

  @media (max-width: 500px) {
    display: grid;
    position: absolute;
    background: #fff;
    width: 100%;
    height: 0;
    top: 80%;
    left: 0;
    gap: 5px;
    overflow: hidden;
    transition: all 0.4s;
    z-index: 1000;

    a {
      margin: 0 10px;
      border-radius: 2px;
      border: 1px solid #bebebe;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
