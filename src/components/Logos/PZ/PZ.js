import React from 'react'
import { FastForward, FastRewind } from 'material-ui-icons'
import classes from './PZ.css'

const pz = (props) => {
  return (
    <div className={classes.pzRoot}>
      <FastRewind className={classes.arrow} onClick={props.goBack} />
      <p>PAZ</p>
      <FastForward className={classes.arrow} onClick={props.goForward} />
    </div>
  )
}

export default pz