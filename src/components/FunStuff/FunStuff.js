import React from 'react'
import { Link } from 'react-router-dom'

export const FunStuff = () => {
  return (
    <section id='FunStuff'>
      <h1 id='about-hi'>more <span className='bigBold'>Fun </span>stuff about me</h1>
      <div className='section1-div' id='about-div1-1'>
        <img id='cooking-img' className='circle-images' src={require('../../assets/images/FunStuff/cooking.svg')} />
      </div>
      <p id='FunStuff-intro'><span className='bigBold'>Passion</span> is my middle name.  I play pinball competitively.  Once a casual spectator came up to me after I finished playing a game.  He said to me, 'I hope to be as passionate about <span id='italics'>anything</span> in my life as you are about pinball.'  It was one of the best compliments that I have ever received.
      <br/><br/>I love to cook, travel, hike and play pinball.  I like to run, bike and stay active.  I enjoy working with my hands, <span className='bigBold'>fixing</span> up pinball machines, working on cars, tinkering around the house.  I enjoy learning almost anything.  Some of my favorite things to <span className='bigBold'>learn</span> are languages (spoken and programmable), rule sets, and techniques.</p>
      <div className='section1-div' id='div1-2'>
        <img className='circle-images' id='travel-img' src={require('../../assets/images/FunStuff/travel.svg')} />
      </div>
      <div className='section1-div' id='about-div1-3'>
        <img id='cooking-img' className='circle-images' src={require('../../assets/images/FunStuff/cool-lion.jpg')} />
      </div>
      <div className='section1-div' id='div1-4'>
        <img id='cooking-img' className='circle-images' src={require('../../assets/images/FunStuff/hiking.svg')} />
      </div>
    </section>
  )
}
