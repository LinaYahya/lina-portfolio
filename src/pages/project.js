import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectLists from "../components/projectLists"

const ProjectPage = () => (
  <Layout>
    <SEO title="Project" />
    <div style={{ margin: "10% auto", width: "85%" }}>
      <h2 style={{ width: "60%",  marginLeft: "5%" }}>
        This projects I made during a coding bootcamp, Every project a unique
        experience with differient technologies, Even project scale Is small,
        but What's is really matter, the technologies I learnt at every single
        project
      </h2>
      <ProjectLists />
    </div>
  </Layout>
)

export default ProjectPage
