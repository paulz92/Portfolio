import React from 'react'
import PZ from '../../Logos/PZ/PZ'
import NavItems from '../NavItems/NavItems'
import classes from './Drawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const drawer = (props) => {
  let attachedClasses = [classes.drawer, classes.Close]

  if (props.open) {
    attachedClasses = [classes.drawer, classes.Open]
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <nav>
          <NavItems />
        </nav>
        <PZ goForward={props.goForward} goBack={props.goBack} />
      </div>
    </Aux>
  )
}

export default drawer