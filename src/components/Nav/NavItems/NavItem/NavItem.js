import React from 'react'
import classes from './NavItem.css'
import { NavLink } from 'react-router-dom'

const navItem = (props) => {
  return (
    <li className={classes.NavItem}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}>{props.children}</NavLink>
    </li>
  )
}

export default navItem