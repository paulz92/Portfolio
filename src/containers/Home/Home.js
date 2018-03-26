import React, { Component } from 'react'
import classes from './Home.css'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import PhotoCred from '../../components/PhotoCred/PhotoCred'

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return (
      <div className={classes.homeRoot}>
        <div className={classes.homeWrap}>
          <div className={classes.contentWrap}>
            <p>Hi, I'm <span className={classes.name}>Paul Zavattieri</span>.</p>
            <p>I'm a front end web developer.</p>
          </div>
          <Link to="/about" className={classes.link}>
            <Button words="More about me"/>
          </Link>
        </div>
        <PhotoCred
          words="I took this photo of Summit Lake in August 2017, near the peak of Mt. Evans, Colorado." />
      </div>
    )
  }
}

export default Home