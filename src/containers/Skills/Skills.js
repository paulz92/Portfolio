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
      { name: 'JavaScript', picture: "../../../../assets/images/me.png" }, 
      { name: 'React.js', picture: "../../../../assets/images/me.png" },
      { name: 'Vue.js', picture: "../../../../assets/images/me.png" },
      { name: 'jQuery', picture: "../../../../assets/images/me.png" },
      { name: 'Node.js', picture: "../../../../assets/images/me.png" },
      { name: 'Express.js', picture: "../../../../assets/images/me.png" },
      { name: 'Handlebars.js', picture: "../../../../assets/images/me.png" }
    ]
  },
  {
    name: 'CSS',
    examples: [
      { name: 'CSS3', picture: "../../../../assets/images/me.png" }, 
      { name: 'Bootstrap', picture: "../../../../assets/images/me.png" },
      { name: 'Materialize', picture: "../../../../assets/images/me.png"},
      { name: 'Material UI', picture: "../../../../assets/images/me.png" }
    ]
  },
  {
    name: 'HTML',
    examples: [
      { name: 'HTML5', picture: "../../../../assets/images/me.png" }, 
      { name: 'JSX', picture: "../../../../assets/images/me.png" },
    ]
  },
  {
    name: 'Back End',
    examples: [
      { name: 'MySQL', picture: "../../../../assets/images/me.png" }, 
      { name: 'MongoDB', picture: "../../../../assets/images/me.png" }
    ]
  },
  {
    name: 'Testing',
    examples: [
      { name: 'Mocha', picture: "../../../../assets/images/me.png" }, 
      { name: 'Chai', picture: "../../../../assets/images/me.png" },
      { name: 'Nightmare', picture: "../../../../assets/images/me.png"}
    ]
  },
  {
    name: 'Tools',
    examples: [
      { name: 'GitHub', picture: "../../../../assets/images/me.png" }, 
      { name: 'Heroku', picture: "../../../../assets/images/me.png" },
      { name: 'VS Code', picture: "../../../../assets/images/me.png"}
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