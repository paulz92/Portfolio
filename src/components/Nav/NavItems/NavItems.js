import React from 'react'
import classes from './NavItems.css'
import NavItem from './NavItem/NavItem'

const navItems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link="/" exact>HOME</NavItem>
      <NavItem link="/about">ABOUT</NavItem>
      <NavItem link="/projects">PROJECTS</NavItem>
      <NavItem link="/contact">CONTACT</NavItem>
    </ul>
  )
}

export default navItems