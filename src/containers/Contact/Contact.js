import React, { Component } from 'react'
import classes from './Contact.css'
import Button from '../../components/UI/Button/Button'
import PhotoCred from '../../components/PhotoCred/PhotoCred'

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return (
      <div className={classes.contactWrap}>
        <h1 className={classes.headerClass}>Contact</h1>
        <div className={classes.contentWrap}>
          <div className={classes.thanksBlurb}>
            <p>Again, <span className={classes.thanks}>thank you</span> for visiting my portfolio, I hope you enjoyed it.</p> 
            <p>I welcome speaking with you about collaborating or joining your team. Contact me!</p>
            <div className={classes.contactContainer}>
              <p className={classes.contact}>Phone</p>
              <p>(919) 268-0414</p>
              <p className={classes.contact}>Email</p>
              <p>paulz92@gmail.com</p>
            </div>
          </div>
          <div className={classes.social}>
            <h1>Social</h1>
            <div className={classes.socialIcons}>
              <a className={classes.link} href="https://github.com/paulz92" rel="noopener noreferrer" target="_blank">
                <img src={require("../../assets/images/icons/github.png")} alt="link to github" />
              </a>
              <a className={classes.link} href="https://www.linkedin.com/in/paul-zavattieri-jr/" rel="noopener noreferrer" target="_blank">
                <img src={require("../../assets/images/icons/linkedin.png")} alt="link to linkedin" />
              </a>            
            </div>
          </div>
        </div>
        <form action="mailto:paulz92@gmail.com" method="POST">
            <Button id="submit" type="submit" words="Send me an email" />
        </form>
        <PhotoCred 
          words="The first non-Colorado picture! Welcome to Seattle - when biking around Discovery Park, it's hard not to stop every few seconds to take a picture." />
      </div>
    )
  }
}

export default Contact