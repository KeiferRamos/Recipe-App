import React from "react"
import { graphql } from "gatsby"
import Wrapper from "../../Layout/wrapper"
import { BlogsContainer, Layout } from "./style"
import Blog from "../../components/blog"

function Blogs({
  data: {
    blogs: { nodes },
  },
}) {
  return (
    <Wrapper>
      <Layout>
        <h1>
          Best Food Blogs to Sate your
          <br /> Hunger in 2022
        </h1>
        <BlogsContainer>
          {nodes.map(({ image, title }, i) => {
            return <Blog key={i} {...{ title, image }} />
          })}
        </BlogsContainer>
      </Layout>
    </Wrapper>
  )
}

export const getAllBlogs = graphql`
  query MyQuery {
    blogs: allContentfulBlogs {
      nodes {
        title
        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR, formats: WEBP)
        }
        description {
          description
        }
      }
    }
  }
`

export default Blogs
