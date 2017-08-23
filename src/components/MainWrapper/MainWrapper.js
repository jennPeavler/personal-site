import React from 'react'

import { Intro } from '../Intro/Intro'
import { Family } from '../Family/Family'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import { SocialMedia } from '../SocialMedia/SocialMedia'
import { FunStuff } from '../FunStuff/FunStuff'
import { ThankYou } from '../ThankYou/ThankYou'

export const MainWrapper = () => {
  return (
    <section>
      <Intro />
      <About />
      <Projects />
      <SocialMedia />
      {/* <Projects /> */}
      <Family />
      {/* <FunStuff /> */}
      <ThankYou />
    </section>
  )
}
