import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { MainWrapper } from '../MainWrapper/MainWrapper'
import { Me } from '../Me/Me'
import { Dragon } from '../Dragon/Dragon'
import { Lullaby } from '../Lullaby/Lullaby'
import { Dexter } from '../Dexter/Dexter'
import '../../assets/styles/App.css';

class App extends Component {

  render() {
    return (
      <main id='app-wrap'>
        <Switch>
          <Route path='/me' component={Me} />
          <Route path='/dragon' component={Dragon} />
          <Route path='/lullaby' component={Lullaby} />
          <Route path='/dexter' component={Dexter} />
          <Route path='/' component={MainWrapper} />
        </Switch>
      </main>
    );
  }
}

export default App;
