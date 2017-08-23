import React from 'react';
import Coverflow from 'react-coverflow';

export const Projects = () => {

  const clickImage = () => {
    console.log('I clicked the image')
  }

  return (
    <section id='projects'>
      <div id='projects-box'>
        <article id='project-summary'>
          <table>
            <thead>
              <tr>
                <th colSpan={2}><h2 id='table-title'>Projects</h2></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='col-1' id='top-left'>
                  <p>PinShow</p>
                </td>
                <td className='col-2' id='top-right'>
                  <p>{'<React/Native, Express, WebPush>'}</p>
                </td>
              </tr>
              <tr>
                <td className='col-1'>
                  <p>MovieTracker</p>
                </td>
                <td className='col-2'>
                  <p>{'<JS, React/Router, Redux, Jest>'}</p>
                </td>
              </tr>
              <tr>
                <td className='col-1'>
                  <p>Swapi Box</p>
                </td>
                <td className='col-2'>
                  <p>{'<JS, React, API, CSS, Mocha/Chai>'}</p>
                </td>
              </tr>
              <tr>
                <td className='col-1'>
                  <p>Weatherly</p>
                </td>
                <td className='col-2'>
                  <p>{'<JS, React, HTML, Sass, Enzyme>'}</p>
                </td>
              </tr>
              <tr>
                <td className='col-1'>
                  <p>Breakout</p>
                </td>
                <td className='col-2'>
                  <p>{'<JS, HTML, animation, CSS, Mocha>'}</p>
                </td>
              </tr>
              <tr>
                <td className='col-1'>
                  <p>Health Assist</p>
                </td>
                <td className='col-2'>
                  <p>{'<Angular, Express, SQL>'}</p>
                </td>
              </tr>
              <tr>
                <td className='col-1 last-row' id='bottom-left'>
                  <p>Static Comps</p>
                </td>
                <td className='col-2 last-row' id='bottom-right'>
                  <p>{'<HTML, CSS, Sprites, Cross-Browser>'}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <article id='project-descriptions'>
          <p><span className='bold'>PinShow:</span>  This was a solo project.  The app finds pinball machines within 50 miles of the user location.  The app will also notify the user if they walk within 500 ft of a pinball machine.  PinShow uses technology that was new to me at the time. In order to build this app, I became familiar with geolocation, google maps api, service workers, push notifications, express and SQL. </p>
          <p className='center'>•</p>
          <p><span className='bold'>MovieTracker:</span>  This was a group project.  With two other developers, we built an app that shows current box office movies.  The user has the capability to log in and mark movies as favorites.  Through building this app, I discovered that I enjoy building apps in redux!  I became more familiar with React Router4.  I also became more adept at integrating an express backend into an app.</p>
          <p className='center'>•</p>
          <p><span className='bold'>Swapi Box:</span>  I built this app with one other developer.  The app retrieves data from a Star Wars API and allows the user to view the data in three categories: People, Planets and Vehicles.  The user can also select favorites.  Through building this app, I dealt with asynchronous fetch api calls.  It was really interesting to navigate asynchronous issues and still provide the user with an appealing experience.</p>
          <p className='center'>•</p>
          <p><span className='bold'>Weatherly:</span>  I built this app with one other developer.  This app allows you to check the weather.  Through building this app, I became familiar with React and working with large data sets retrieved from an API.  I became adept at scrubbing data and a lot of thought went into manipulating the data into a format that would make developing the app much more simple and straightforward.</p>
          <p className='center'>•</p>
          <p><span className='bold'>Breakout:</span>  I built this app with one other developer.  This is a take on the classic breakout/arcanoid game.  Through building this app, I learned a lot about file structure and separating logic into different components.  This makes the app more manageable and also easier to test.  I also learned how to work with HTML Canvas in order to draw shapes on the page as well as make animations.</p>
          <p className='center'>•</p>
          <p><span className='bold'>Health Assist:</span>  I built this project with my partner as a side project between class projects at Turing.  The app allows a user to log health information and view the information in a line chart.  Through building this project, I learned to use Angular and Canvas JS.  I became more familiar with integrating an Express backend and using SQL to manage user data.  I also learned that it is possible and very fun to have side projects!</p>
          <p className='center'>•</p>
          <p><span className='bold'>Static Comps:</span>  These projects were solo projects.  I was given static comps and was told to duplicate the comps using only HTML and CSS.  I was not given any assets and was told that I had creative license with the icons, font and color pallete.  The site had to uphold the integrity of the comp layout and had to be responsive.  I really enjoyed re-creating these comps and it was nice to let my creativity and attention to detail shine.  I also became very proficient at aquiring and manipulating images and icons.</p>
        </article>
      </div>
      <Coverflow
        width={700}
        height={530}
        displayQuantityOfSide={1}
        navigation={true}
        enableHeading={true}
        clickable={true}
        enableScroll={false}
        >
        <img id='project-slide' src={require('../../assets/images/Projects/Weatherly.png')} alt='Weatherly' data-action='https://jenn-peavler-weatherly.herokuapp.com/' />
        <img id='project-slide' src={require('../../assets/images/Projects/MovieTracker.png')} alt='MovieTracker' data-action='https://jenn-peavler-movie-tracker.herokuapp.com/' />
        <img id='project-slide' src={require('../../assets/images/Projects/Breakout.png')} alt='Breakout' data-action='https://jennpeavler.github.io/gameTime/' />
        <img id='project-slide' src={require('../../assets/images/Projects/PinShow.png')} alt='PinShow' data-action='https://show-me-the-pin.herokuapp.com/' />
        <img id='project-slide' src={require('../../assets/images/Projects/StarWars.png')} alt='Swapi Box' target='blank' data-action='https://i-like-star-wars.herokuapp.com/' />
        <img id='project-slide' src={require('../../assets/images/Projects/StaticComp3.png')} alt='Static Comp' data-action='https://jennpeavler.github.io/jp-comp-challenge-3/' />
        <img id='project-slide' src={require('../../assets/images/Projects/StaticComp2.png')} alt='Static Comp' data-action='https://jennpeavler.github.io/jp-comp-challenge-2/' />
        <img id='project-slide' src={require('../../assets/images/Projects/StaticComp1.png')} alt='Static Comp' data-action='https://jennpeavler.github.io/jp-comp-challenge-1/' />
        <img id='project-slide' src={require('../../assets/images/Projects/HealthAssist.png')} alt='Health Assist' data-action='https://healthassist.herokuapp.com/' />
      </Coverflow>
      {/* <div id='project-links-1'>
        <img className='project-badge' src={require('../../assets/images/Projects/project-badge.svg')} />
        <div className='link-box'>
          <a className='p-links first-link' target='blank' href='https://i-like-star-wars.herokuapp.com/'>SWApi Box</a>
          <a className='p-links' target='blank' href='https://jennpeavler.github.io/gameTime/'>Breakout</a>
          <a className='p-links last-link' target='blank' href='https://show-me-the-pin.herokuapp.com/'>PinShow</a>
        </div>
      </div>
      <div id='project-links-2'>
        <img className='project-badge' id='badge-2' src={require('../../assets/images/Projects/project-badge2.svg')} />
        <div className='link-box link-box2'>
          <a className='p-links first-link' target='blank' href='https://jenn-peavler-movie-tracker.herokuapp.com/'>Movie Tracker</a>
          <a className='p-links' target='blank' href='https://jenn-peavler-weatherly.herokuapp.com/'>Weatherly</a>
          <a className='p-links last-link' target='blank' href='https://healthassist.herokuapp.com/'>Health Assist</a>
        </div>
      </div>
      <div id='project-links-3'>
        <img className='project-badge' id='badge-3' src={require('../../assets/images/Projects/project-badge4.svg')} />
        <div className='link-box link-box3'>
          <a className='p-links first-link links-3' target='blank' href='https://jennpeavler.github.io/jp-comp-challenge-3/'>static kitty</a>
          <a className='p-links links-3' target='blank' href='https://jennpeavler.github.io/jp-comp-challenge-2/'>static cat</a>
          <a className='p-links last-link links-3' target='blank' href='https://jennpeavler.github.io/jp-comp-challenge-1/'>static meow</a>
        </div>
      </div> */}
    </section>
  )
}
