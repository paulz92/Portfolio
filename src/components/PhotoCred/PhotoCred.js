import React from 'react'
import classes from './PhotoCred.css'

const photoCred = props => (
  <p className={classes.photoCred}>{props.words}</p>
)

export default photoCred