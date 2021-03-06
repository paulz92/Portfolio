import React from 'react'
import classes from './SectionHeader.css'

const headers = props => (
  <h1 className={classes.headerClass}>{props.header}</h1>
)

export default headers