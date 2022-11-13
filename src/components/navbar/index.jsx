import React, { useState } from "react"
import { Urls } from "../../data/urls"
import { List, Navbar, Title } from "./styled"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"

function NavBar() {
  const [show, setShow] = useState(false)

  return (
    <Navbar>
      <Title>
        <Link to="/" onClick={() => setShow(false)}>
          Master Cooking
        </Link>
      </Title>
      <FaBars className="toggler" onClick={() => setShow(!show)} />
      <List className={show ? "show" : ""}>
        {Urls.map(({ name, path }, index) => (
          <Link key={index} to={path} onClick={() => setShow(false)}>
            {name}
          </Link>
        ))}
      </List>
    </Navbar>
  )
}

export default NavBar
