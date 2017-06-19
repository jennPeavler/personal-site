import React from 'react'
import { Link } from 'react-router-dom'

export const Dexter = () => {
  return (
    <main id='dexter-wrap'>
      <section id='dexter-bio'>
        <h1 id='dexter-title'>dext<span id='pink'>er</span></h1>
        <p id='dexter-subtitle'>Where cuddles always lead to a lick on the face, almost always right on the lips.</p>
        <article id='dexter-info'>
          <p>
          The story of how I became Dexter Peavler...I am originally from Houston.  I lived in a trailer near the airport.  I shouldn't say in the trailer.  I lived in the hot sun outside the trailer.  Sometimes the humans would come out and poke me with a stick, but they never let me come inside where it was nice and cool.  I was always hungry back then.  Skin and bones.  I spent my time running around in traffic, eating garbage, and scratching at my fleas.
          </p>
          <p>
            One day, I saw two nice looking ladies walking down the sidewalk, so I decided to follow them.  They stopped and called me cute, rubbed by belly and continued walking on their way.  I followed them and followed them.  Next thing I knew, they took me into their airbnb and gave me a bath.  Next thing I knew, I was on a plane, a bus then a car.  Now I live in a nice cool house in Denver, and I'm spoiled rotten.  Consider my territory marked!
          </p>
        </article>
      </section>
      <section id='dexter-doghouse'>
        <Link id='dexter-home' to='/'>
          <p id='dexter-home-btn'>go back home</p>
          <img src={require('../../assets/images/Dexter/doghouse.jpg')} />
        </Link>
      </section>
    </main>
  )
}
