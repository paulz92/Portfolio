import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from './Skills.css'
import Button from '../../components/UI/Button/Button'
import PhotoCred from '../../components/PhotoCred/PhotoCred'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import SkillSection from './SkillSection/SkillSection'

const mySkills = [
  {
    name: 'JavaScript',
    examples: [
      { name: 'JavaScript', picture: require("../../assets/images/javascript.png") }, 
      { name: 'React.js', picture: require("../../assets/images/react.png") },
      { name: 'Vue.js', picture: require("../../assets/images/vue.png") },
      { name: 'jQuery', picture: require("../../assets/images/jquery.png") },
      { name: 'Node.js', picture: require("../../assets/images/node.png") },
      { name: 'Express.js', picture: require("../../assets/images/express.png") },
      { name: 'Handlebars.js', picture: require("../../assets/images/handlebars.png") }
    ]
  },
  {
    name: 'CSS',
    examples: [
      { name: 'CSS3', picture: require("../../assets/images/css.png") }, 
      { name: 'Bootstrap', picture: require("../../assets/images/bootstrap.png") },
      { name: 'Materialize', picture: require("../../assets/images/materialize.png")},
      { name: 'Material UI', picture: require("../../assets/images/materialui.png") }
    ]
  },
  {
    name: 'HTML',
    examples: [
      { name: 'HTML5', picture: require("../../assets/images/html.png") }, 
      { name: 'JSX', picture: require("../../assets/images/jsx.png") },
    ]
  },
  {
    name: 'Back End',
    examples: [
      { name: 'MySQL', picture: require("../../assets/images/mysql.png") }, 
      { name: 'MongoDB', picture: require("../../assets/images/mongo.png") }
    ]
  },
  {
    name: 'Testing',
    examples: [
      { name: 'Mocha', picture: require("../../assets/images/mocha.png") }, 
      { name: 'Chai', picture: require("../../assets/images/chai.png") }
    ]
  },
  {
    name: 'Tools',
    examples: [
      { name: 'GitHub', picture: require("../../assets/images/github.png") }, 
      { name: 'Heroku', picture: require("../../assets/images/heroku.png") },
      { name: 'VS Code', picture: require("../../assets/images/vscode.png")}
    ]
  }
]

class Skills extends Component {
  render() {
    return (
      <div className={classes.skillsRoot}>
        <SectionHeader header="My Skills" />
        {mySkills.map((skill, index) => {
          return <SkillSection key={index} skill={skill.name} examples={skill.examples} />
        })}
        <Link to="/projects" className={classes.link}>
          <Button words="See my projects" />
        </Link>
        <PhotoCred 
          words="If you've been to Boulder, CO, you might recognize these Flatirons. A little cloudy, but great day for a hike." />
      </div>
    )
  }
}

export default Skills