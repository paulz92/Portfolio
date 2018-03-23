import React, { Component } from 'react'
import classes from './Home.css'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'

class Home extends Component {
  render() {
    return (
      <div className={classes.homeWrap}>
        <div className={classes.contentWrap}>
          <p>Hi, I'm <span className={classes.name}>Paul Zavattieri</span>.</p>
          <p>I'm a front end web developer.</p>
        </div>
        <Link to="/about" className={classes.link}>
          <Button />
        </Link>
        <p className={classes.photoCred}>I took this photo of Summit Lake in August 2017, near the peak of Mt. Evans, Colorado.</p>
      </div>
    )
  }
}

export default Home