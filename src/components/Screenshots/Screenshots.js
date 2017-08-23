import React from 'react';
import Coverflow from 'react-coverflow';

export const Screenshots = () => {

  const clickImage = () => {
    console.log('I clicked the image')
  }

  return (
    <Coverflow
      id='slide-show'
      width={1500}
      height={1020}
      displayQuantityOfSide={1}
      navigation={true}
      enableHeading={true}
      clickable={true}
      enableScroll={false}
      >
      <img src={require('../../assets/images/Projects/Weatherly.png')} alt='Weatherly' data-action='https://jenn-peavler-weatherly.herokuapp.com/' />
      <img src={require('../../assets/images/Projects/MovieTracker.png')} alt='MovieTracker' data-action='https://jenn-peavler-movie-tracker.herokuapp.com/' />
      <img src={require('../../assets/images/Projects/Breakout.png')} alt='Breakout' data-action='https://jennpeavler.github.io/gameTime/' />
      <img src={require('../../assets/images/Projects/PinShow.png')} alt='PinShow' data-action='https://show-me-the-pin.herokuapp.com/' />
      <img src={require('../../assets/images/Projects/StarWars.png')} alt='Swapi Box' target='blank' data-action='https://i-like-star-wars.herokuapp.com/' />
      <img src={require('../../assets/images/Projects/StaticComp3.png')} alt='Static Comp' data-action='https://jennpeavler.github.io/jp-comp-challenge-3/' />
      <img src={require('../../assets/images/Projects/StaticComp2.png')} alt='Static Comp' data-action='https://jennpeavler.github.io/jp-comp-challenge-2/' />
      <img src={require('../../assets/images/Projects/StaticComp1.png')} alt='Static Comp' data-action='https://jennpeavler.github.io/jp-comp-challenge-1/' />
      <img src={require('../../assets/images/Projects/HealthAssist.png')} alt='Health Assist' data-action='https://healthassist.herokuapp.com/' />
    </Coverflow>
  )
}
