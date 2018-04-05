import React from 'react'
import classes from './Toolbar.css'
import Toggler from '../Drawer/Toggler/Toggler'
import NavItems from '../NavItems/NavItems'
import PZ from '../../Logos/PZ/PZ'

const toolbar = (props) => {
  return (
    <header className={classes.headerRoot}>
      <div className={classes.smallScreenDisplay}>
        <Toggler clicked={props.toggleDrawer} />
        <PZ goForward={props.goForward} goBack={props.goBack} className={classes.pz} />
      </div>
      <div className={classes.headerContent}>
        <nav className={classes.desktopNav}>
          <NavItems goForward={props.goForward} goBack={props.goBack} />
        </nav>
      </div>
    </header>
  )
}

export default toolbar