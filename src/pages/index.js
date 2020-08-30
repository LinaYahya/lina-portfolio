import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Technologies from "../components/technologies"
import ProjectLists from "../components/projectLists"
import "./home.css"
import myPhoto from "../images/gatsby-icon.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <div className="container">
        <div className="container_bio">
          <h2>
            <strong style={{ fontWeight: "bolder" }}>Hi I'm Lina.</strong>
            I'm a junior web developer, I have a love of Web Development that I
            bring to all my work, to know more about me surfe my projects.
          </h2>
        </div>
        <div className="container_img">
          <svg class="blob-rotate-faster" viewBox="0 0 278 279">
            <path
              style={{ fill: "var(--image)" }}
              d="M137.896 0.127761C167.59 -0.638578 198.383 1.62824 222.877 18.4301C247.738 35.4836 263.129 63.014 271.706 91.9151C280.118 120.258 280.513 150.661 270.364 178.43C260.457 205.538 239.342 225.92 216.353 243.372C192.903 261.174 167.336 278.631 137.896 278.994C108.28 279.358 81.0666 263.928 58.0226 245.322C35.8955 227.455 20.5343 203.415 11.0775 176.594C1.41508 149.191 -4.23875 119.749 3.91245 91.8587C12.2111 63.4638 31.6331 39.4483 56.0438 22.7357C79.9856 6.34414 108.89 0.876363 137.896 0.127761Z"
            ></path>
          </svg>
          <img
            src={myPhoto}
            alt="personal"
            style={{
              position: "relative",
              width: "50%",
              left: "50px",
              top: "-48%",
            }}
          />
        </div>
      </div>
      <Technologies />
      <ProjectLists />
    </div>
  </Layout>
)

export default IndexPage
