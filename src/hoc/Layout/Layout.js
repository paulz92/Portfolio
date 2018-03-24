import React, { Component } from 'react'
import Aux from '../Auxiliary/Auxiliary'
import classes from './Layout.css'
import Toolbar from '../../components/Nav/Toolbar/Toolbar'
// import Drawer from '../../components/Nav/Drawer/Drawer'
import Footer from '../../components/Footer/Footer'
import { withRouter } from 'react-router-dom'


class Layout extends Component {
  state = {
    showDrawer: false
  }

  handleDrawerClose = () => {
    this.setState({
      showDrawer: false
    })
  }

  handleDrawerToggle = () => {
    this.setState((prevState) => {
      return {showDrawer: !prevState.showDrawer}
    })
  }

  handleGoBack = event => {
    event.preventDefault()
    this.props.history.goBack()
  }

  handleGoForward = event => {
    event.preventDefault()
    this.props.history.goForward()
  }

  render() {
    return (
      <Aux>
        <Toolbar 
          toggleDrawer={this.handleDrawerToggle}
          goBack={this.handleGoBack}
          goForward={this.handleGoForward} />
        {/* <Drawer 
          closed={this.handleDrawerClose} 
          open={this.state.showDrawer} /> */}
        <main className={classes.mainContent}>
          {this.props.children}
        </main>
        <Footer className={classes.footerRoot}/>
      </Aux>
    )
  }
}

export default withRouter(Layout)