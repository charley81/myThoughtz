import React from "react"
import styled from "@emotion/styled"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;

  + * {
    margin-top: 0;
  }
`

const TextBox = styled("div")`
  background-image: linear-gradient(to top, var(--pink) 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  margin-top: 0;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p {
    color: var(--dark)
    margin-top: 0;
  }

  a {
    color: var(--dark)
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero-img.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>myThoughtz</h1>
        <p>
          Whats Up World! <Link to="/about">About Me</Link>
        </p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
