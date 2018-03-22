import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import About from './containers/About/About'
import Home from './containers/Home/Home'
import Contact from './containers/Contact/Contact'
import Projects from './containers/Projects/Projects'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
