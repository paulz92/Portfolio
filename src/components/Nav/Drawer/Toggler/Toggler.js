import React from 'react'
import classes from './Toggler.css'

const toggler = (props) => (
  <div 
    onClick={props.clicked}
    className={classes.toggler}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default toggler