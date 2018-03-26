import React from 'react'

const projectDetails = props => (
  <div>
    <p>{props.project.name}</p>
    <p>{props.project.github}</p>
    <p>{props.project.deploy}</p>
    <p>{props.project.description}</p>
    <p>{props.project.tag}</p>
  </div>
)


export default projectDetails