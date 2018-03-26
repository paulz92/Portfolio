import React from 'react'
import classes from './SkillBlock.css'

const skillBlock = (props) => {
  return (
    <div className={classes.skillBlockRoot}>
    <div className={classes.picDiv}>
      <img src={props.picture} alt="me" className={classes.picWidth}/>
      </div>
      <p>{props.name}</p>
    </div>
  )
}

export default skillBlock