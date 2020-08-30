import React from 'react';
import FontAwesome from 'react-fontawesome';
import projects from '../data/projects';
import './project.css'

function ProjectList() {
  return (
    <>
      <h2>My Projects</h2>
      <ul className="project-list">
        {projects.map(({ title, description,technologies, year, github, demo }, index) => (
          <li className="project" key={index}>
            <div style={{ width: '80%' }}>
              <h3>{title}</h3>
              <h4>{description}</h4>
              {technologies?.map(e=> (
                <span key={e}>{e}</span>
              ))}
            </div>
            <div style={{ marginTop: '10%' }}>
              <span>{year}</span>
              <a href={github}>github</a>
              <a href={demo}>demo</a>
            </div>
          </li>
        ))
        }
      </ul>

    </>
  )
}
export default ProjectList;
