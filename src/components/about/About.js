import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward}from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary}from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
        <div className='about__me-image'>
        <img src={ME} alt="About Image" />
        </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>
          <article className='about__card'>
          <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>20+ Worldwide</small>
          </article>
          <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
           <h5>Projects</h5>  
          <small>10+ Completed</small>

          </article>
        </div>
        <p>Hello, Namaste ,My name is Bibek Subedi . I'm currently working as a Software Engineer / Sr. Designer at Conital, which is also a software firm that I founded along with few of my college mates.
Because of my academics right now, I am a half-day university undergrad & a half-day computer programmer & I get to spend half of my day at college and rest of the day at my office at Birtamode.
Since the day I started deep-diving in overall software development,
I've chosen web platform as my contemporary platform that is lovely to learn, easy to use, and fairly simple to maintain..</p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    
    
    
    
    
    </section>
  )
}


export default About