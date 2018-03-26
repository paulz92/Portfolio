import React from 'react'
import classes from './Toolbar.css'
// import Drawer from '../Drawer/Drawer'
import NavItems from '../NavItems/NavItems'

const toolbar = (props) => {
  return (
    <header className={classes.headerRoot}>
      <div className={classes.headerContent}>
        <nav className={classes.desktopNav}>
          <NavItems goForward={props.goForward} goBack={props.goBack} />
        </nav>
        {/* <Drawer /> */}
      </div>
    </header>
  )
}

export default toolbar