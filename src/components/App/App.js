import React, { Component } from 'react';

import { Family } from '../Family/Family'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import { Section4 } from '../Section4/Section4'
import { Section5 } from '../Section5/Section5'
import '../../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <main id='app-wrap'>
        <Family />
        <About />
        <Projects />
        <Section4 />
        <Section5 />
      </main>
    );
  }
}

export default App;
