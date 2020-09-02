import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import projects from "../data/projects"
import "./project.css"

function ProjectList({ more }) {
  let list = more ? projects.slice(0, 2) : projects

  return (
    <div className="projectPage">
      <h2>My Projects</h2>
      <ul className="project-list">
        {list.map(
          ({ title, description, technologies, year, github, demo }, index) => (
            <li className="project" key={index}>
              <div style={{ width: "80%" }}>
                <h3>{title}</h3>
                <h4>{description}</h4>
                {technologies?.map(e => (
                  <span key={e}>{e}</span>
                ))}
                <span style={{ color: "var(--textLink)" }}>{year}</span>
              </div>
              <div style={{ marginTop: "10%", marginLeft: "5%" }}>
                <a href={github} target="blank" title="Github repo">
                  <i class="fab fa-github"></i>
                </a>
                <a href={demo} target="blank" title="Live Demo">
                  <i class="fas fa-link"></i>
                </a>
              </div>
            </li>
          )
        )}
      </ul>
      {more && (
        <Link style={{ marginLeft: "5%" }} to="/project">
          more ...
        </Link>
      )}
    </div>
  )
}

ProjectList.defaultProps = {
  more: false,
}

ProjectList.propTypes = {
  more: PropTypes.bool,
}
export default ProjectList
