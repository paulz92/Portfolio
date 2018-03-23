import React, { Component } from 'react'
import classes from './Home.css'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm'

class Home extends Component {
  render() {
    return (
      <div className={classes.homeWrap}>
        <div className={classes.contentWrap}>
          <p>Hey, I'm <span className={classes.name}>Paul Zavattieri</span>.</p>
          <p>I'm a front end web developer.</p>
        </div>
        <Link to="/about">
          <Button>More about me<AccessAlarmIcon /></Button>
        </Link>
      </div>
    )
  }
}

export default Home