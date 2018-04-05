import React from 'react'
import classes from './ProjectDetails.css'

const projectDetails = props => (
  <div className={classes.projDetailsRoot}>
    <div className={classes.rootRow}>
      <img src={props.project.siteImage} alt={props.project.name} className={classes.projPic} />
    </div>
    <div className={classes.rootRow}>
      <h2>{props.project.name}</h2>
      <p>{props.project.description}</p>
      <p>Built with: {props.project.techStack}</p>
      <div className={classes.linkPic}>
        <a href={props.project.github} target="_blank">
          <img src={require("../../../assets/images/icons/github.png")} alt='github' width="75px" />
        </a>
        {props.project.logoImage ? <a href={props.project.deploy} target="_blank">
          <img src={props.project.logoImage} alt='deployed' width="75px" />
        </a> : null}
      </div>
    </div>
  </div>
)


export default projectDetails