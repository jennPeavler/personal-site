import React from 'react'

export const Section4 = () => {
  return (
    <main id='section4'>
      <section id='section4-wrapper'>
        <p id='section4-title'>Social media & Links</p>
        <section id='social-media-links'>
          <a href='https://www.linkedin.com/in/jennifer-peavler-17558310/' target='blank'><img id='linkedin-img' src={require('../../assets/images/Section4/linkedin.png')} /></a>
          <a href='mailto:jenn.peavler@gmail.com' target='blank'><img id='email-img' src={require('../../assets/images/Section4/email.svg')} /></a>
          <a id='resume-link' href='https://drive.google.com/open?id=0B3ItQVupdvvgN3ZWLTF6amNBeU0' target='blank'>
          <img id='linkedin-img' src={require('../../assets/images/Section4/resume.svg')} />
          <p>resume</p>
        </a>
      </section>
      <section id='github'>
        <img id='github-img' src={require('../../assets/images/Section4/github.png')} />
        <ul id='github-list'>
          <li><a href='https://github.com/jennPeavler' target='blank'>My GitHub Profile</a></li>
          <li><a href='https://github.com/jennPeavler/starWars' target='blank'>SWApi Box</a></li>
          <li><a href='https://github.com/jennPeavler/gameTime' target='blank'>Breakout</a></li>
          <li><a href='https://github.com/jennPeavler/show-me-the-pin' target='blank'>PinShow</a></li>
          <li><a href='https://github.com/jennPeavler/jp-comp-challenge-3' target='blank'>static kitty</a></li>
          <li><a href='https://github.com/jennPeavler/jp-comp-challenge-2' target='blank'>static cat</a></li>
          <li><a href='https://github.com/jennPeavler/jp-comp-challenge-1' target='blank'>static meow</a></li>
          <li><a href='https://github.com/jennPeavler/movieTracker' target='blank'>Movie Tracker</a></li>
          <li><a href='https://github.com/jennPeavler/weatherly' target='blank'>Weatherly</a></li>
          <li><a href='https://github.com/Yloganathan/HeathAssist' target='blank'>Health Assist</a></li>
        </ul>
      </section>
      </section>
    </main>
  )
}
