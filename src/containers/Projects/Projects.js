import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import StackGrid from 'react-stack-grid'
import { AppBar, Tabs, Typography } from 'material-ui'
import { Tab } from 'material-ui/Tabs'
import classes from './Projects.css'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Project from '../../components/Project/Project'
import PhotoCred from '../../components/PhotoCred/PhotoCred'
import myProjects from './projectinfo.js'

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

class Projects extends Component {
  state = {
    value: 0,
    tags: ["ALL", "JAVASCRIPT", "REACT.JS", "VUE.JS", "JQUERY", "NODE.JS"]
  }

  handleChange = (event, value) => {
    this.setState({ ...this.state, value })
  }

  handleChangeIndex = index => {
    this.setState({ ...this.state, value: index })
  }

  // create tabs from state
  renderTabs() {
    const { tags } = this.state
    return (
      tags.map((tag, index) => {
        return <Tab key={index} className={classes.indTabs} label={tag} />
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
        gutterWidth={20}
        gutterHeight={16}
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
        return <Project key={index} image={project.image} name={project.name} />
      })
    )

    const filteredProjects = (tag) => (
      myProjects.filter(project => {
        return project.tag === tag
      }).map((foundProject, index) => {
        return <Project key={index} image={foundProject.image} name={foundProject.name} />
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
        <SectionHeader header="Projects" />
        <div className={classes.contentWrap}>
          <AppBar className={classes.tabsRoot} position="static">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="#ff5722"
              textColor="inherit"
              fullWidth
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
        <PhotoCred 
          words="Here we see Echo Lake. If you drive the Mt. Evans Scenic Byway, you'll inevtiably pass by Echo Lake Lodge. 
            Hike around the lake or grab a bite to eat before finishing the drive." />
      </div>
    )
  }
}

export default Projects