import React, { Component } from 'react'
import classes from './Contact.css'

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return (
      <div className={classes.contactWrap}>
        <div className={classes.contentWrap}>
          <p>contact</p>
        </div>
      </div>
    )
  }
}

export default Contact