import React from "react"
import SliderComp from "../../components/slider"
import Bg from "../../components/Bg"
import {
  Header,
  BrowseButton,
  BlogsContent,
  BlogsContainer,
  RecipeContainer,
  Layout,
} from "./style"
import { graphql, Link, navigate } from "gatsby"
import Wrapper from "../../Layout/wrapper"
import Seo from "../../components/Seo"
import Blog from "../../components/blog"

function Home({
  data: {
    recipe: { nodes },
    blogs,
  },
}) {
  return (
    <Wrapper>
      <Seo />
      <Layout>
        <Header>
          <h2>Always Cook With Passion</h2>
          <p>
            Cooking is all about people. Food is maybe the only universal thing
            that really has the power to bring everyone together.🍎
          </p>
          <br />
          <p>
            No matter what culture, everywhere around the world, people eat
            together.🍞
          </p>
          <BrowseButton>
            <Link to="/recipes">Browse Recipes</Link>
          </BrowseButton>
        </Header>
        <Bg />
        <BlogsContent>
          <h1>Blogs</h1>
          <p>
            Food truck flexitarian art party 90's. Vape portland PBR&B authentic
            chicharrones. Heirloom umami occupy.
          </p>
          <BlogsContainer>
            {blogs.nodes.slice(1, 3).map((item, i) => {
              return <Blog key={i} {...item} />
            })}
          </BlogsContainer>
          <button onClick={() => navigate("/blogs")}>read more</button>
        </BlogsContent>
        <RecipeContainer>
          <h1>featured Recipes</h1>
          <SliderComp items={nodes} />
        </RecipeContainer>
      </Layout>
    </Wrapper>
  )
}

export const getData = graphql`
  query MyQuery {
    blogs: allContentfulBlogs {
      nodes {
        title
        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR, formats: WEBP)
        }
      }
    }
    recipe: allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        cookingTime
        name
        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR, formats: WEBP)
        }
      }
    }
  }
`

export default Home
