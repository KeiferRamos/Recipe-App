import { graphql } from "gatsby"
import React from "react"
import Wrapper from "../../Layout/wrapper"
import { Layout, StyledHeader, Subtitle, Title } from "./style"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Seo from "../../components/Seo"

const richtextOption = references => {
  return {
    renderNode: {
      [BLOCKS.HEADING_3]: (_, children) => {
        return <Subtitle>{children}</Subtitle>
      },
      [BLOCKS.HEADING_2]: (_, children) => {
        return <Subtitle>{children}</Subtitle>
      },
      [BLOCKS.PARAGRAPH]: (_, children) => {
        return <p>{children}</p>
      },
      [BLOCKS.EMBEDDED_ASSET]: ({ data }, children) => {
        const id = data.target.sys.id

        const image = references.find(
          ({ contentful_id }) => contentful_id === id
        )
        return <GatsbyImage image={getImage(image)} alt="blog image" />
      },
    },
  }
}

function Blog({
  data: {
    blog: {
      title,
      image: { url },
      content: { raw, references },
    },
  },
}) {
  return (
    <Wrapper>
      <Seo name={title} image={url} />
      <Layout>
        <Title>{title}</Title>
        {documentToReactComponents(JSON.parse(raw), richtextOption(references))}
      </Layout>
    </Wrapper>
  )
}

export const getSingleBlog = graphql`
  query getSingleBlog($title: String) {
    blog: contentfulBlogs(title: { eq: $title }) {
      content {
        raw
        references {
          contentful_id
          gatsbyImageData(placeholder: DOMINANT_COLOR, formats: WEBP)
        }
      }
      title
      image {
        url
      }
    }
  }
`

export default Blog
