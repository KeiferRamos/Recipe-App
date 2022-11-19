import React from "react"
import { Header, TagsContainer, RecipeList, Pagination, Layout } from "./styled"
import { StaticImage } from "gatsby-plugin-image"
import Recipe from "../../components/recipe"
import Wrapper from "../../Layout/wrapper"
import { graphql, Link } from "gatsby"

function Recipes({
  data: {
    recipe: { nodes },
  },
  pageContext: { pages, tags },
}) {
  return (
    <Wrapper>
      <Layout>
        <Header>
          <StaticImage
            src="../../assets/images/food-bg-4.webp"
            alt="image background"
            placeholder="dominantColor"
            formats={["WEBP"]}
          />
          <div>
            <h1>Recipe List For You!</h1>
            <p>
              Recipedia has everything foodies are looking for. Find easy and
              sulit recipes, Filipino food and desserts, as well as cooking
              inspiration. Tara, kain tayo!
            </p>
          </div>
          <TagsContainer>
            <h2>Tags:</h2>
            {Object.keys(tags).map((tag, i) => {
              const title = tag.toLowerCase().replace(/ /g, "-")
              return (
                <Link to={`/tags/${title}`} key={i}>
                  {tag}
                </Link>
              )
            })}
          </TagsContainer>
        </Header>
        <RecipeList>
          {nodes.map((items, i) => {
            return <Recipe key={i} {...items} />
          })}
        </RecipeList>
        <Pagination>
          {pages.map(item => (
            <Link
              key={item}
              activeClassName="selected"
              to={`/recipes/${item + 1}`}
            >
              {item + 1}
            </Link>
          ))}
        </Pagination>
      </Layout>
    </Wrapper>
  )
}

export const getData = graphql`
  query getAllRecipes($skip: Int, $limit: Int) {
    recipe: allContentfulRecipe(skip: $skip, limit: $limit) {
      nodes {
        cookingTime
        id
        image {
          gatsbyImageData(placeholder: TRACED_SVG, formats: WEBP)
        }
        name
        featured
      }
    }
  }
`

export default Recipes
