import React from 'react'
import classes from './SkillBlock.css'

const skillBlock = (props) => {
  return (
    <div className={classes.skillBlockRoot}>
      <img src={require("../../../../assets/images/me.png")} alt="me" className={classes.picWidth}/>
      <p>{props.name}</p>
    </div>
  )
}

export default skillBlock