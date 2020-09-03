import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.css"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div style={{ margin: "10% 10%", width: "60%" }}>
      <h2>About Lina</h2>
      <p>
        The thought of describing myself in a bio gives me anxiety that's
        rivaled by little else. In a brief, I'm Lina Ebeid a full-stack web
        developer, My Journey at web development began at the year of 2020. I
        believe that hard-working and good planning always leads to good
        results.So After 7 months form hard-working. I've made this portfolio to
        present some of the projects I worked on.
      </p>
      <h2>Web development skills</h2>
      <div className="skills">
        <div className="skills_front">
          <h3>Front-end Development</h3>
          <ul>
            <li>React</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>FullCalenadar</li>
            <li>antd</li>
          </ul>
        </div>
        <div className="skills_back">
          <h3>Back-end Development</h3>

          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Postgres</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>

      <h2>What else ?</h2>
      <p>
        WEB DEVELOPMENT IS NOT ALL <br />
        Before 2019 I was an environmental engineer, who has a great passion for
        environmental issues. After that, I faced a very hard time while
        struggling between my passion and the reality that my future as an
        environmental engineer is unclear and hazy. So in March 2019, I made my
        decision and I decided to start learning programming. I started my
        journey as a self-learner then I joined code academy at Gaza sky geeks.
        <br />
        ALSO I have intrests in Sociology and History,At my free time I watch
        movies and SOUNDCLOUD is the best companion
      </p>
    </div>
  </Layout>
)

export default AboutPage
