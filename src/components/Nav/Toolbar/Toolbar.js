import React from 'react'
import classes from './Toolbar.css'
// import Drawer from '../Drawer/Drawer'
import NavItems from '../NavItems/NavItems'
import Logo from '../../Logos/PZ/PZ'

const toolbar = (props) => {
  return (
    <header className={classes.headerRoot}>
      <div className={classes.headerContent}>
        <nav className={classes.desktopNav}>
          <NavItems />
        </nav>
        {/* <Drawer /> */}
        <div className={classes.logoRoot}>
          <Logo />
        </div>
      </div>
    </header>
  )
}

export default toolbar