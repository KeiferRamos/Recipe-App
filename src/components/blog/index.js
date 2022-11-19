import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Blog({ title, image }) {
  const pathName = title.toLowerCase().replace(/ /g, "-")

  return (
    <Link to={`/blogs/${pathName}`}>
      <GatsbyImage image={getImage(image)} alt="Blog image" />
      <h3>{title}</h3>
    </Link>
  )
}

export default Blog
