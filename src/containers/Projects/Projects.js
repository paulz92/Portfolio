import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import StackGrid from 'react-stack-grid'
import { AppBar, Tabs, Typography } from 'material-ui'
import { Tab } from 'material-ui/Tabs'
import classes from './Projects.css'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Project from '../../components/Project/Project'
import Button from '../../components/UI/Button/Button'
import PhotoCred from '../../components/PhotoCred/PhotoCred'
import Modal from '../../components/UI/Modal/Modal'
import ProjectDetails from '../../components/Project/ProjectDetails/ProjectDetails'
import myProjects from './projectinfo.js'

function TabContainer({ children }) {
  return (
    <Typography component="div">
      {children}
    </Typography>
  )
}

class Projects extends Component {
  state = {
    value: 0,
    tags: ["ALL", "REACT.JS", "VUE.JS", "JQUERY", "FULL STACK", "NODE.JS", "VANILLA JS"],
    shouldModalBeOpen: false,
    clickedProject: {}
  }

  componentDidMount() {
    window.scrollTo(0,0)
  }

  handleChange = (event, value) => {
    this.setState({ ...this.state, value })
  }

  handleChangeIndex = index => {
    this.setState({ ...this.state, value: index })
  }

  openModalHandler = (name) => {
    const match = (
      myProjects.filter(project => {
        return project.name === name
      })
    )
    this.setState({ ...this.state, shouldModalBeOpen: true, clickedProject: match[0] })
  }

  closeModalHandler = () => {
    this.setState({ ...this.state, shouldModalBeOpen: false })
  }

  // overrides material ui to ensure active tab is our dark orange theme
  activeTabStyle = (isActive) => {
    let tabStyle = classes.indTabActive
    return isActive ? tabStyle : tabStyle = classes.indTab
  }

  // create tabs from state
  renderTabs() {
    const { tags } = this.state
    return (
      tags.map((tag, index) => {
        return (
          <Tab 
            key={index} 
            className={this.activeTabStyle(this.state.value === index)} 
            label={tag}
          />
        )
      })
    )
  }

  // render content in stack grid function
  renderStack = content => {
    return (
      <StackGrid
        monitorImagesLoaded
        columnWidth={300}
        duration={300}
        appearDelay={30}
        className={classes.stackGrid}
      >
        {content}
      </StackGrid>
    )
  }

  // code for filtering projects
  // copy tags, map through them. if tag is All, map and return all my projects in container.
  // otherwise, filter my projects for those equalling selecting tag, map and return those projects
  filterTabs() {
    const { tags } = this.state

    const allProjects = (
      myProjects.map((project, index) => {
        return <Project key={index} siteImage={project.siteImage} name={project.name} clicked={this.openModalHandler} />
      })
    )

    const filteredProjects = (tag) => (
      myProjects.filter(project => {
        return project.tag === tag
      }).map((foundProject, index) => {
        return <Project key={index} siteImage={foundProject.siteImage} name={foundProject.name} clicked={this.openModalHandler} />
      })
    )
    
    return (
      tags.map((tag, index) => {
        if (tag === "ALL") {
          return (
            <TabContainer key={index} label={tag}>
              {this.renderStack(allProjects)}
            </TabContainer>
          ) 
        } 
        else {
          return (
            <TabContainer key={index} label={tag}>
              {this.renderStack(filteredProjects(tag))}
            </TabContainer>
          )
        }
      })
    )
  }

  render() {
    return (
      <div className={classes.projectsWrap}>
        <Modal show={this.state.shouldModalBeOpen} modalClosed={this.closeModalHandler}>
          <ProjectDetails project={this.state.clickedProject} />
        </Modal>
        <SectionHeader header="Projects" />
        <div className={classes.contentWrap}>
          <AppBar className={classes.tabsRoot} position="static">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="#64d8cb"
              textColor="azure"
              fullWidth
              scrollable
              scrollButtons="on"
            >
              {this.renderTabs()}
            </Tabs>
          </AppBar>
          <SwipeableViews
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            {this.filterTabs()}
          </SwipeableViews>
        </div>
        <Link to="/contact" className={classes.link}>
            <Button words="Contact me" />
        </Link>
        <PhotoCred 
          words="Here we see Echo Lake. If you drive the Mt. Evans Scenic Byway, you'll inevtiably pass by Echo Lake Lodge. 
            Hike around the lake or grab a bite to eat before finishing the drive." />
      </div>
    )
  }
}

export default Projects