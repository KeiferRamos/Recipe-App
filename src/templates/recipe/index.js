import React from "react"
import {
  Header,
  Instruction,
  Ingredients,
  Method,
  ShareContainer,
  Layout,
} from "./style"
import Seo from "../../components/Seo"
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share"

import SliderComp from "../../components/slider"
import Wrapper from "../../Layout/wrapper"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Recipe({ data }) {
  const {
    content: { ingredient, methods, relatedRecipes },
    cookingTime,
    description: { description },
    image,
    name,
  } = data.recipe

  const title = name.toLowerCase().replace(/ /g, "-")
  const url = `https://cooking-master-recipe-app.netlify.app/${title}`

  return (
    <Wrapper>
      <Layout>
        <Seo name={name} image={image.url} />
        <Header>
          <GatsbyImage image={getImage(image)} alt="recipe" />
          <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <ShareContainer>
              <TwitterShareButton url={url}>
                <TwitterIcon />
              </TwitterShareButton>
              <FacebookShareButton url={url}>
                <FacebookIcon />
              </FacebookShareButton>
              <LinkedinShareButton url={url}>
                <LinkedinIcon />
              </LinkedinShareButton>
            </ShareContainer>
            <span>Prep Time: {cookingTime}min</span>
          </div>
        </Header>
        <Instruction>
          <Ingredients>
            <h2>Ingredients</h2>
            <br />
            {ingredient.map((ingredient, i) => {
              return <p key={i}>{ingredient}</p>
            })}
          </Ingredients>
          <Method>
            <h2>Instructions</h2>
            <br />
            <div></div>
            {methods.map((instruction, i) => {
              return (
                <div key={i}>
                  <span>{i + 1}</span>
                  <p>{instruction}</p>
                </div>
              )
            })}
          </Method>
        </Instruction>
        <h2>Related Recipes</h2>
        <br />
        <SliderComp items={relatedRecipes} />
      </Layout>
    </Wrapper>
  )
}

export const getData = graphql`
  query MyQuery($name: String) {
    recipe: contentfulRecipe(name: { eq: $name }) {
      description {
        description
      }
      cookingTime
      content {
        ingredient
        methods
        tags
        relatedRecipes {
          image
          name
        }
      }
      name
      image {
        gatsbyImageData(
          placeholder: TRACED_SVG
          layout: CONSTRAINED
          formats: WEBP
        )
        url
      }
    }
  }
`

export default Recipe
