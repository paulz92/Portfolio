import React from 'react'
import classes from './Project.css'
import { FastForward, FastRewind } from 'material-ui-icons'

const project = (props) => {
  return (
    <div className={classes.projCardRoot}>
      <img src={props.siteImage} alt={props.name} className={classes.projImage} />
      <div className={classes.projName}>
        <div className={classes.small} data-name={props.name} onClick={props.clicked}>
          <FastRewind className={classes.arrowIconLeft} />
          <h3>{props.name}</h3>
          <FastForward className={classes.arrowIconRight} /> 
        </div>
      </div>
    </div>
  )
}

export default project