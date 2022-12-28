import React from 'react'
import AboutContent from '../components/About/AboutContent'
import BackgroundImg from '../components/BackgroundImg/Background/Background'

export default function About(): JSX.Element {
  return (
    <>
      <BackgroundImg heading = 'ABOUT ME_' text = 'Some stuff about me' page = 'about'/>
      <AboutContent/>
    </>
  )
}
