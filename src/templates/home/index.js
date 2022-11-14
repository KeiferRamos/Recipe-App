import React from "react"
import SliderComp from "../../components/slider"
import Bg from "../../components/Bg"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Wrapper from "../../Layout/wrapper"
import Seo from "../../components/Seo"

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  padding: 0 15%;

  @media (max-width: 900px) {
    padding: 10px;
  }
`

export const Header = styled.header`
  flex: 1;
  min-width: 350px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: lighter;
  }
  p {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    padding: 0 10px;
  }
`

export const BrowseButton = styled.button`
  border: none;
  margin-top: 20px;
  padding: 15px 30px;
  background: #0f261f;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`

export const RecipeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 40px 0;
  margin-top: 100px;

  h1 {
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    font-size: 35px;
  }

  div {
    h2 {
      font-size: 25px;
    }

    img {
      width: 100%;
      height: 200px;

      object-fit: cover;
      transition: 0.5s;
    }
  }
`

function Home({
  data: {
    recipe: { nodes },
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
        <RecipeContainer>
          <h1>featured Recipes</h1>
          <SliderComp items={nodes} />
        </RecipeContainer>
      </Layout>
    </Wrapper>
  )
}

export const getData = graphql`
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

export default Home
