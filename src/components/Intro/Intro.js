import React from 'react'
import { Link } from 'react-router-dom'

export const Intro = () => {
return (
    <section id='section1'>
      <h1 id='hi'>Hello I am <span className='bigBold'>Jenn Peavler</span></h1>
      <section id='link-section'>
        <div className='section1-div' id='div1-1'>
          <h2>Crafting a code journey</h2>
          <input type='image' id='javascript-img' className='intro-circle-images' src='http://www.ellipse.edu.np/images/javascript-icon.png' />
        </div>
        <div className='section1-div' id='div1-2'>
          <input type='image' className='intro-circle-images' id='html-img' src='https://webref.ru/assets/images/book/learn-html-css_2.png' />
        </div>
        <div className='section1-div' id='div1-3'>
          <input type='image' className='intro-circle-images' id='css-img' src='https://sterfield.co.jp/admin/wp-content/uploads/2015/05/css3-logo.png' />
          <img className='quote-swirl' src={require('../../assets/images/Family/quote-swirl.svg')} />
          <p id='quote'>“I have only one heart, I will not hide it from the world”</p>
        </div>
        <div className='section1-div' id='div1-4'>
          <input type='image' className='intro-circle-images' id='react-angular-img' src='http://blog.mgechev.com/images/react-di/angular-in-react.png' />
        </div>
      </section>
      <p id='intro-intro'><span className='bigBold'>Welcome</span> to a colorful glimpse into my life.  I am a front end developer that also enjoys server-side code, designing RESTful APIs and database migrations.  I like writting code that I can show my friends and having that code create software than I can show my mom. <br /><br />Take a look below to learn a little about me, my skills and my family</p>
    </section>
  )
}
