import React from 'react'

import { Family } from '../Family/Family'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import { SocialMedia } from '../SocialMedia/SocialMedia'
import { Section5 } from '../Section5/Section5'

export const MainWrapper = () => {
  return (
    <section>
      <Family />
      <About />
      <Projects />
      <SocialMedia />
      <Section5 />
    </section>
  )
}
