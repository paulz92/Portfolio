import React from 'react';
import classes from './Button.css';
import { FastForward, FastRewind } from 'material-ui-icons'

const button = (props) => (
  <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>
      <FastRewind className={classes.arrowIconLeft} />
      <p className={classes.buttonP}>{props.words}</p> 
      <FastForward className={classes.arrowIconRight} />  
  </button>
);

export default button;