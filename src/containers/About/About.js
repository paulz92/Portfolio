import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from './About.css'
import Button from '../../components/UI/Button/Button'
import PhotoCred from '../../components/PhotoCred/PhotoCred'
import SectionHeader from '../../components/SectionHeader/SectionHeader'

class About extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return (
      <div className={classes.aboutRoot}>
        <SectionHeader header="About" />
        <img src={require("../../assets/images/me.png")} alt="me" className={classes.mePic} />
        <div className={classes.middle}>
          <div className={classes.mainContent}>
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
              position, so if you like what you see and want to speak with me further, please don't hesitate 
              to <Link to="/contact" className={classes.link + " " + classes.thanks}>reach out</Link>.
            </p>
          </div>
        </div>
        <Link to="/skills" className={classes.link}>
            <Button words="See my skills" />
        </Link>
        <PhotoCred
          words="This is a photo I took while visiting Red Rocks Park just outside of Denver, CO." />
      </div>
    )
  }
}

export default About