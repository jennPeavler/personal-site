import React from 'react'
import { Link } from 'react-router-dom'

export const Family = () => {
return (
    <section id='section1'>
      <h1 id='family-hi'><span className='bigBold'>Click</span> on the <span className='bigBold'>circles</span> if you want to...</h1>
      <section id='link-section'>
        <div className='section1-div' id='div1-1'>
          <h2>meet my family...</h2>
          <Link to='/me'>
            <input type='image' id='sme-img' className='circle-images' src={require('../../assets/images/Family/jenn.jpg')} />
          </Link>
        </div>
        <div className='section1-div' id='div1-2'>
          <Link to='/dragon'>
            <input type='image' className='circle-images' id='dragon-img' src={require('../../assets/images/Family/dragon.jpg')} />
          </Link>
        </div>
        <div className='section1-div' id='family-div1-3'>
          <Link to='/lullaby'>
            <input type='image' className='circle-images' id='lullaby-img' src={require('../../assets/images/Family/lullaby.jpg')} />
          </Link>
          {/* <img className='quote-swirl' src={require('../../assets/images/Family/quote-swirl.svg')} /> */}
          {/* <p id='quote'>“I have only one heart, I will not hide it from the world”</p> */}
        </div>
        <div className='section1-div' id='div1-4'>
          <Link to='/dexter'>
            <input type='image' className='circle-images' id='dexter-img' src={require('../../assets/images/Family/dexter.jpg')} />
          </Link>
        </div>
      </section>
      <p id='family-intro'><span className='bigBold'>Family</span> is very important to me so to show a bit of my creative side, I have made bios inspired by me and my family.  Click on these images for a bit of silliness and to get to know me and my family!  The bio pages are static, but they are still fun to look at and read.</p>
    </section>
  )
}
