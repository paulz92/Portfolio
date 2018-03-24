import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from './About.css'
import Button from '../../components/UI/Button/Button'
import PhotoCred from '../../components/PhotoCred/PhotoCred'

class About extends Component {
  render() {
    return (
      <div className={classes.aboutWrap}>
        <div className={classes.left}>
        </div>
        <div className={classes.middle}>
          <div className={classes.middleContent}>
            <img src={require("../../assets/images/me.png")} alt="me" className={classes.mePic} />
            <Link to="/projects" className={classes.link}>
            <Button 
              words="Check out my projects"
              className={classes.toProjButton} />
            </Link>
          </div>
          <PhotoCred
            words="I took this photo at Red Rocks Park just outside of Denver, CO in August 2017." />
        </div>
        <div className={classes.right}>
        </div>
      </div>
    )
  }
}

export default About