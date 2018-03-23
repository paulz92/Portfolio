import React from 'react';
import classes from './Button.css';
import { KeyboardArrowRight } from 'material-ui-icons'

const button = (props) => (
  <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>
      <p className={classes.buttonP}>More about me</p> 
      <KeyboardArrowRight className={classes.arrowIcon} />  
  </button>
);

export default button;