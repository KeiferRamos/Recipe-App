import React, { memo } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function RecipeDisplay({ image, name, cookingTime }) {
  const title = name.toLowerCase().replaceAll(/ /g, "-")

  return (
    <Link to={`/${title}`}>
      {image.gatsbyImageData ? (
        <GatsbyImage
          style={{ width: "100%" }}
          image={getImage(image)}
          alt="recipe"
        />
      ) : (
        <img src={image} style={{ width: "100%", maxHeight: "250px" }} />
      )}

      <h2>{name}</h2>
      <p>cooking time: {cookingTime}min</p>
    </Link>
  )
}

export default memo(RecipeDisplay)
