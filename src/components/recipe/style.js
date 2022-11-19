import { Link } from "gatsby"
import styled from "styled-components"

export const StyledContainer = styled(Link)`
  height: 250px;
  position: relative;
  padding: 10px;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: end;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;

  .featured-tag {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    font-size: 13px;
    border-radius: 3px;
    background: #049028;
  }

  .title {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #3d413e;
    padding: 5px 10px;
    font-size: 15px;
  }

  .gatsby-image-wrapper,
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`
