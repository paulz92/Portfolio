import React, { Component } from 'react'
import classes from './Contact.css'
import Button from '../../components/UI/Button/Button'
import PhotoCred from '../../components/PhotoCred/PhotoCred'
import SectionHeader from '../../components/SectionHeader/SectionHeader'

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return (
      <div className={classes.contactWrap}>
        <SectionHeader header="Contact" />
        <div className={classes.contentWrap}>
          <div className={classes.thanksBlurb}>
            <p>Again, <span className={classes.thanks}>thank you</span> for visiting my portfolio, I hope you enjoyed it.</p> 
            <p>I welcome speaking with you about collaborating or joining your team. Contact me!</p>
            <p><span className={classes.contact}>Phone:</span> (919) 268-0414</p>
            <p><span className={classes.contact}>Email:</span> paulz92@gmail.com</p>
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