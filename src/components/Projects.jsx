import React from 'react'
import projects from '../mock/projects.json'

function Projects () {
  return (
    <ul className='projects'>
      {
        projects.map(project => (
          <li key={project.ProjectID}>
            <a href={project.Source} target='_blank' rel='noreferrer'>
              <h3>{project.ProjectName}</h3>
              <img src={project.img} alt={project.ProjectName} />
            </a>
          </li>
        ))
        }
    </ul>
  )
}

export default Projects
