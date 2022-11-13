import React from "react"
import Wrapper from "../../Layout/wrapper"
import Letter from "../../assets/icons/letter.webp"
import { Layout, StyledForm, SubmitButton, RecipeContainer } from "./style"

import { graphql } from "gatsby"
import SliderComp from "../../components/slider"

function ContactUs({
  data: {
    recipe: { nodes },
  },
}) {
  return (
    <Wrapper>
      <Layout>
        <section>
          <img src={Letter} alt="" />
        </section>
        <StyledForm action="https://formspree.io/f/xpznkvov" method="POST">
          <h2>Please Send Us Message!</h2>
          <input
            type="text"
            id="full-name"
            name="full name"
            placeholder="Full name"
          />
          <input type="email" id="email" name="email" placeholder="Email" />
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          />
          <SubmitButton type="submit">submit</SubmitButton>
        </StyledForm>
        <RecipeContainer>
          <h1>featured Recipes</h1>
          <SliderComp items={nodes} />
        </RecipeContainer>
      </Layout>
    </Wrapper>
  )
}

export const getFeatured = graphql`
  query {
    recipe: allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        name
        cookingTime
      }
    }
  }
`

export default ContactUs
