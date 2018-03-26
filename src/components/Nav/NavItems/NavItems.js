import React from 'react'
import classes from './NavItems.css'
import NavItem from './NavItem/NavItem'
import Logo from '../../Logos/PZ/PZ'

const navItems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <div className={classes.leftLinks} >
        <NavItem link="/about">ABOUT</NavItem>
        <NavItem link="/skills">SKILLS</NavItem>
      </div>
      <div className={classes.logoRoot}>
        <Logo goBack={props.goBack} goForward={props.goForward} />
      </div>
      <div className={classes.rightLinks} >
        <NavItem link="/projects">PROJECTS</NavItem>
        <NavItem link="/contact">CONTACT</NavItem>
      </div>
    </ul>
  )
}

export default navItems