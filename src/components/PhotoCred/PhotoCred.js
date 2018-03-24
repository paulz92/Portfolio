import React from 'react'
import classes from './PhotoCred.css'

const photoCred = props => (
  <div className={classes.photoCredRoot}>
    <p className={classes.photoCred}>{props.words}</p>
  </div>
)

export default photoCred