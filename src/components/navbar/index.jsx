import React, { useEffect, useState } from "react"
import { Urls } from "../../data/urls"
import { List, Navbar, Title } from "./styled"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"

function NavBar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    function setWidth() {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", setWidth)

    return () => window.removeEventListener("resize", setWidth)
  }, [])

  return (
    <Navbar>
      <Title>
        <Link to="/" onClick={() => setShowNav(false)}>
          Master Cooking
        </Link>
      </Title>
      {screenWidth <= 500 ? (
        <FaBars onClick={() => setShowNav(!showNav)} />
      ) : null}
      <List
        className={`${screenWidth <= 500 ? "mobile" : ""} ${
          screenWidth <= 500 && showNav ? "show" : ""
        }`}
      >
        {Urls.map(({ name, path }, index) => (
          <Link key={index} to={path} onClick={() => setShowNav(false)}>
            {name}
          </Link>
        ))}
      </List>
    </Navbar>
  )
}

export default NavBar
