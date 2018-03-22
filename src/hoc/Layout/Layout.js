import React, { Component } from 'react'
import Aux from '../Auxiliary/Auxiliary'
import classes from './Layout.css'
import Toolbar from '../../components/Nav/Toolbar/Toolbar'
// import Drawer from '../../components/Nav/Drawer/Drawer'
import Footer from '../../components/Footer/Footer'

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

  render() {
    return (
      <Aux>
        <Toolbar toggleDrawer={this.handleDrawerToggle} />
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

export default Layout