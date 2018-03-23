import React, { Component } from 'react'
import classes from './About.css'

class About extends Component {
  render() {
    return (
      <div className={classes.aboutWrap}>
        <div className={classes.contentWrap}>
          <p>about</p>
        </div>
      </div>
    )
  }
}

export default About