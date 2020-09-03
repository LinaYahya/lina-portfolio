import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const TechnologiesList = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "tools.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <div style={{ width: "90%", margin: " 5% auto" }}>
      <h2>My Technology</h2>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="tools" />
    </div>
  )
}

export default TechnologiesList
