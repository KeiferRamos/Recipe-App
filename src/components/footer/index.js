import React from "react"
import { StyledFooter, StyledDiv } from "./style"
import { FaFacebookF, FaYoutube, FaTwitter, FaPinterestP } from "react-icons/fa"
import { Urls } from "../../data/urls"
import { Link } from "gatsby"

function Footer() {
  return (
    <StyledFooter>
      <>
        <p>follow me at</p>
        <StyledDiv>
          <FaFacebookF />
          <FaYoutube />
          <FaTwitter />
          <FaPinterestP />
        </StyledDiv>
        <StyledDiv>
          {[{ name: "home", path: "/" }, ...Urls].map(({ name, path }, i) => {
            return (
              <Link key={i} to={path}>
                {name}
                {i < Urls.length ? <span>|</span> : null}
              </Link>
            )
          })}
        </StyledDiv>
      </>
    </StyledFooter>
  )
}

export default Footer
