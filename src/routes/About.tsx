import React from 'react'
import AboutContent from '../components/About/AboutContent'
import BackgroundImg from '../components/BackgroundImg/Background/Background'
import HardSkill from '../components/Skills/HardSkill'

export default function About(): JSX.Element {
  return (
    <>
      <BackgroundImg heading = 'ABOUT ME_' text = 'Some stuff about me' page = 'about'/>
      <AboutContent/>
      <HardSkill/>
    </>
  )
}
