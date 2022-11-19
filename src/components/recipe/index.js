import React, { memo } from "react"
import { StyledContainer } from "./style"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function RecipeDisplay({ image, name, cookingTime, featured }) {
  const title = name.toLowerCase().replaceAll(/ /g, "-")

  return (
    <StyledContainer to={`/${title}`}>
      {image.gatsbyImageData ? (
        <GatsbyImage image={getImage(image)} alt="recipe" />
      ) : (
        <img src={image} />
      )}
      {featured ? <span className="featured-tag">featured</span> : null}
      <div className="title">
        <p>{name}</p>
        <span style={{ fontSize: "13px" }}>cooking time: {cookingTime}min</span>
      </div>
    </StyledContainer>
  )
}

export default memo(RecipeDisplay)
