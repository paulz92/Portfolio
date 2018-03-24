import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from './About.css'
import Button from '../../components/UI/Button/Button'
import PhotoCred from '../../components/PhotoCred/PhotoCred'
import Header from './Header/Header'

class About extends Component {
  render() {
    return (
      <div className={classes.aboutRoot}>
      <div className={classes.aboutWrap}>
        <div className={classes.left}>
          <Header header="About Me" />
          <div className={classes.leftContent}>
            <p className={classes.introP}>
              <span className={classes.thanks}>Thank you</span> for stopping by to check out my portfolio.
            </p>
            <p> 
              I strive to build dynamic, intuitive, and fast applications that users enjoy interacting 
              with on any device. I'm super attentive to detail, enjoy solving problems, and love 
              learning new technologies.
            </p>
            <p>
              I'm located in Raleigh, NC. I learned to code at the UNC-Chapel Hill Coding Boot Camp. 
              I also hold a Bachelor's degree in Finance from NC State University. My first few years
              out of college I worked in corporate finance, which wasn't for me. I found my passion for
              development, decided to make a major career change, and couldn't be happier with my decision.
            </p>
            <p>
              Please make sure to check out my projects. I'm currently seeking a Front End Development 
              position, so if you like what you see and want to speak with me further, please don't hesitate to
              reach out.
            </p>
            <p>
              And if you don't like what you see, let me know! I welcome all feedback - I believe it's key to 
              achieving and maintaining success as a developer.
            </p>
          </div>
        </div>
        <div className={classes.middle}>
          <div className={classes.middleContent}>
            <img src={require("../../assets/images/me.png")} alt="me" className={classes.mePic} />
            <Link to="/projects" className={classes.link}>
            <Button 
              words="See my projects"
              className={classes.toProjButton} />
            </Link>
          </div>
        </div>
        <div className={classes.right}>
          <Header header="My Skills" />
        </div>
      </div>
      <PhotoCred
        words="This is a photo I took while visiting Red Rocks Park just outside of Denver, CO." />
      </div>
    )
  }
}

export default About