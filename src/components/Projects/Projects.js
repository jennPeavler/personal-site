import React from 'react'

export const Projects = () => {
  return (
    <section id='projects'>
      <div id='projects-box'>
        <article id='project-summary'>
          <h2>Projects</h2>
          <p>I had been a chemical engineer for 12 years.  I was working at a start up company.  My job was to design a chemcical plant that turned cornstalks into a chemical that resembled in appearance, table salt.</p>
          <p>•</p>
          <p>After my fifth year working for the company, some investment stragegies proved not so wise after all, and the company went belly up.</p>
          <p>•</p>
          <p>Finding myself without employment, a challenging routine and knowing that I had to begin my search for livlihood, I began to reflect upon my years as a chemcial engineer.  As my reflections came to the surface of my mind, it occurred to me that the times that I was the most passionate and engaged throughout my career were the times that I was involved in programming computers.</p>
          <p>•</p>
          <p>It was at this point in my realization that I enrolled at Turing School of Software and Design to become a programmer.  I began school late January of 2017.  Here you will find a list of projects that have resulted from my studies.</p>
          <p>Please enjoy.</p>
        </article>
      </div>
      <div id='project-links-1'>
        <img className='project-badge' src={require('../../assets/images/Projects/project-badge.svg')} />
        <div className='link-box'>
          <a className='p-links first-link' target='blank' href='https://i-like-star-wars.herokuapp.com/'>SWApi Box</a>
          <a className='p-links' target='blank' href='https://jennpeavler.github.io/gameTime/'>Breakout</a>
          <a className='p-links last-link' target='blank' href='https://show-me-the-pin.herokuapp.com/'>PinShow</a>
        </div>
      </div>
      <div id='project-links-2'>
        <img className='project-badge' id='badge-2' src={require('../../assets/images/Projects/project-badge2.svg')} />
        <div className='link-box link-box2'>
          <a className='p-links first-link' target='blank' href='https://i-like-star-wars.herokuapp.com/'>Movie Tracker</a>
          <a className='p-links' target='blank' href='https://jennpeavler.github.io/gameTime/'>Weatherly</a>
          <a className='p-links last-link' target='blank' href='https://i-like-star-wars.herokuapp.com/'>Health Assist</a>
        </div>
      </div>
      <div id='project-links-3'>
        <img className='project-badge' id='badge-3' src={require('../../assets/images/Projects/project-badge4.svg')} />
        <div className='link-box link-box3'>
          <a className='p-links first-link links-3' target='blank' href='https://jennpeavler.github.io/jp-comp-challenge-3/'>static kitty</a>
          <a className='p-links links-3' target='blank' href='https://jennpeavler.github.io/jp-comp-challenge-2/'>static cat</a>
          <a className='p-links last-link links-3' target='blank' href='https://jennpeavler.github.io/jp-comp-challenge-1/'>static meow</a>
        </div>
      </div>
    </section>
  )
}
