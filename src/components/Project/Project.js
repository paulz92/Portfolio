import React from 'react'
import classes from './Project.css'

const project = (props) => {
  return (
    <img src={props.image} alt={props.name} className={classes.projImage} />
  )
}

export default project