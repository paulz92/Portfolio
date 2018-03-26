import React from 'react'
import { FastForward, FastRewind } from 'material-ui-icons'
import classes from './PZ.css'
import { NavLink } from 'react-router-dom'

const pz = (props) => {
  return (
    <div className={classes.pzRoot}>
      <FastRewind className={classes.arrow} onClick={props.goBack} />
      <NavLink to="/" className={classes.link}>
        <p>PAZ</p>
      </NavLink>
      <FastForward className={classes.arrow} onClick={props.goForward} />
    </div>
  )
}

export default pz