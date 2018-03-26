import React from 'react'
import classes from './SkillSection.css'
import SkillBlock from './SkillBlock/SkillBlock'

const skillSection = (props) => (
  <div className={classes.skillSectionRoot}>
    <h2>{props.skill}</h2>
    <hr></hr>  
    <div className={classes.skillBlocksRoot}>
      {props.examples.map((example, index) => {
        return <SkillBlock key={index} name={example.name} picture={example.picture} />
      })}
    </div>
  </div>
)

export default skillSection