import React from 'react'
import { Link } from 'react-router-dom'

export const Dragon = () => {
  return (
    <section id='dragon-bg'>
      <section id='dragon-wrap'>
        <header>
          <nav>
            <Link className='home-link' to='/'>
              <p className='nav-link'>home</p>
            </Link>
            <p id='about' className='nav-link'>about</p>
          </nav>
          <div id='title-box'>
            <p id='title'>
              Cuddly and Playful
            </p>
            <p id='dragon-name'>Dragon C Peavler</p>
          </div>
        </header>
        <main>
          <article id='welcome'>
            <h3>Meeeow!</h3>
            <p>I am the boss in my household.  I sit on top of the refrigerator and knowingly rule the kingdom.  Anything that moves does not go unnoticed by me.</p>
            <p>The dog, the humans, all my loyal subjects.  Although sometimes I wonder about the dog.  I keep him in line with hisses and he fears my mightly paws.</p>
            <p>I am a fair and generous feline, but if you lay a hand on my sister, I will go to war!  She is the only one in the household that can get a way with anthing!</p>
          </article>
          <article id='profile'>
            <div id='demands'>
              <img id='dragon-pic' src={require('../../assets/images/Dragon/dragon.jpeg')} />
              <p>To win my favor, you must be good at giving belly rubs, but only when I want them, and as long as I want them.<br /><br />You must bring me feathered toys.  These are the simple pleasures in life.</p>
            </div>
            <div id='social-media'>
              <div className='media-bg bg1'>
                <img className='cat-media' src={require('../../assets/images/Dragon/kill-all-humans.png')} />
              </div>
              <div className='media-bg bg2'>
                <img className='cat-media' src={require('../../assets/images/Dragon/mouse2.png')} />
              </div>
              <div className='media-bg bg3'>
                <img className='cat-media' src={require('../../assets/images/Dragon/space-kitty.png')} />
              </div>
              <div className='media-bg bg4'>
                <img className='cat-media' src={require('../../assets/images/Dragon/yarn3.png')} />
              </div>
              <div className='media-bg bg1'>
                <img className='cat-media' src={require('../../assets/images/Dragon/paw.png')} />
              </div>
            </div>
          </article>
        </main>
      </section>
    </section>
  )
}
