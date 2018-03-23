import React from 'react'
import { FastForward, FastRewind } from 'material-ui-icons'
import classes from './PZ.css'

const pz = (props) => {
  return (
    <div className={classes.pzRoot}>
      <FastRewind className={classes.arrow}/>
        <p>PAZ</p>
      <FastForward className={classes.arrow}/>
    </div>
  )
}

export default pz