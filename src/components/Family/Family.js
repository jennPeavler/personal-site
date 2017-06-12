import React from 'react'
import { Link } from 'react-router-dom'

export const Family = () => {
return (
    <section id='section1'>
      <h1 id='hi'>Hello I am sme</h1>
      <div className='section1-div' id='div1-1'>
        <h2>Come with me on a journey.</h2>
        <Link to='/me'>
          <input type='image' id='sme-img' className='circle-images' src={require('../../assets/images/Family/jenn.jpg')} />
        </Link>
      </div>
      <p id='intro'>My life is beautiful.  It always has been.  Or so it seems to me.  Every scene I see is full of lucious greens and blues and yellows.  Sadness and happiness are important.  And so is confusion.</p>
      <div className='section1-div' id='div1-2'>
        <Link to='/dragon'>
          <input type='image' className='circle-images' id='dragon-img' src={require('../../assets/images/Family/dragon.jpg')} />
        </Link>
      </div>
      <div className='section1-div' id='div1-3'>
        <Link to='/lullaby'>
          <input type='image' className='circle-images' id='lullaby-img' src={require('../../assets/images/Family/lullaby.jpg')} />
        </Link>
        <p id='summary'>I like pinball.  The first time that I played was in a dank, dark bar.  The first time I tried I didn't get to far.</p>
      </div>
      <div className='section1-div' id='div1-4'>
        <Link to='/dexter'>
          <input type='image' className='circle-images' src={require('../../assets/images/Family/dexter.jpg')} />
        </Link>
      </div>
    </section>
  )
}
