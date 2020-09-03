import React from "react"
// import tools from "../images/tools.png"
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
      <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Avatar" />
      {/* <img src={tools} alt="tools" style={{objectFit: 'fill', width: '90%'}}/> */}
    </div>
  )
}

export default TechnologiesList
