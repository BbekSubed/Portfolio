import React from 'react'
import{BiCheck} from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Design for Spread and Scale. We will make it</p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>If your business isn't mobile friendly, your business is dead</p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Design is not art. It is about crafting solutions to real issues</p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Your products run for election every day and good design is critical to winning the campaign.</p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Innovation is often the product of constraint</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Software isn’t about methodologies, languages, or even operating systems. It is about working applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>I design software to engineer the illusion of Simplicity, to create it.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>I am building software to help you ease the way Your Company ,Business works. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>If you use it once , you will need it always !</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>There are 3 responses to a piece of design- yes,no and, Wow! Wow is the one to aim for. </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Website Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>You will need it to make your services worldwide.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>I design and develop experiences that will make people's lives Simple.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Building a website is easy , Designing One takes Skill!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>If your Business is not on the Internet ,then your business will not last Long.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Your Websites will be so Understandable and simple ,thats why it is so Complicated to build!</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services