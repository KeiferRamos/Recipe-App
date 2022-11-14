import { graphql } from "gatsby"
import React from "react"
import Recipe from "../../components/recipe"
import Wrapper from "../../Layout/wrapper"
import { Layout, RecipeContainer } from "./style"

function Tags({
  data: {
    recipe: { nodes },
  },
  pageContext: { tag },
}) {
  return (
    <Wrapper>
      <Layout>
        <h1>{tag}</h1>
        <RecipeContainer>
          {nodes.map((item, i) => {
            return <Recipe key={i} {...item} />
          })}
        </RecipeContainer>
      </Layout>
    </Wrapper>
  )
}

export default Tags

export const getData = graphql`
  query getFilteredRecipes($tag: [String]) {
    recipe: allContentfulRecipe(filter: { content: { tags: { in: $tag } } }) {
      nodes {
        name
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        cookingTime
      }
    }
  }
`
