import React from 'react'
import { Link } from 'react-router-dom'

export const Sme = () => {
  return (
    <section id='lullaby-bg'>
      <header id='lullaby-header'>
        <img id='lullaby-pic' src={require('../../assets/images/Lullaby/lullaby.png')} />
        <nav id='lullaby-nav'>
          <Link id='lullaby-home' to='/'>
            <p className='lullaby-nav-link'>home</p>
          </Link>
          <p className='lullaby-nav-link' id='lullaby-meow'>about</p>
          <p className='lullaby-nav-link'>meow</p>
          <p className='lullaby-nav-link'>scratch</p>
          <p className='lullaby-nav-link'>sniff</p>
          <img className='lullaby-media' src={require('../../assets/images/Lullaby/twitter.svg')} />
          <img className='lullaby-media' id='lullaby-instagram' src={require('../../assets/images/Lullaby/instagram.svg')} />
          <img className='lullaby-media' id='lullaby-mail' src={require('../../assets/images/Lullaby/catmail.svg')} />
        </nav>
      </header>
      <main id='lullaby-main'>
        <section>
          <img id='picture-collage' src={require('../../assets/images/Lullaby/picture-collage.png')} />
        </section>
      </main>
      <footer>
        <p id='lullaby-copyright'>All Rights Reserved to everyone.  Thank you to all the interweb cat Lovers.  Lullaby Inc å @2017.</p>
      </footer>
    </section>
  )
}
