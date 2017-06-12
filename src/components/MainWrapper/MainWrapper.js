import React from 'react'

import { Family } from '../Family/Family'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import { Section4 } from '../Section4/Section4'
import { Section5 } from '../Section5/Section5'

export const MainWrapper = () => {
  return (
    <section>
      <Family />
      <About />
      <Projects />
      <Section4 />
      <Section5 />
    </section>
  )
}
