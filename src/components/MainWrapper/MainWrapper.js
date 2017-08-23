import React from 'react'

import { Family } from '../Family/Family'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import { SocialMedia } from '../SocialMedia/SocialMedia'
import { FunStuff } from '../FunStuff/FunStuff'
import { Screenshots } from '../Screenshots/Screenshots'

export const MainWrapper = () => {
  return (
    <section>
      <Family />
      <About />
      <Projects />
      {/* <Screenshots /> */}
      <SocialMedia />
      <FunStuff />
    </section>
  )
}
