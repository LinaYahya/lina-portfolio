import React from "react"
import projects from "../data/projects"
import "./project.css"

function ProjectList() {
  return (
    <>
      <h2>My Projects</h2>
      <ul className="project-list">
        {projects.map(
          ({ title, description, technologies, year, github, demo }, index) => (
            <li className="project" key={index}>
              <div style={{ width: "80%" }}>
                <h3>{title}</h3>
                <h4>{description}</h4>
                {technologies?.map(e => (
                  <span key={e}>{e}</span>
                  ))}
                <span style={{color:'var(--textLink)'}}>{year}</span>
              </div>
              <div style={{ marginTop: "10%" }}>
                <a href={github}>
                  <i class="fab fa-github"></i>
                </a>
                <a href={demo}>
                  <i class="fas fa-link"></i>
                </a>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  )
}
export default ProjectList
