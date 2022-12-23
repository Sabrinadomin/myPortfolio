import React from 'react'
import BackgroundImg from '../components/BackgroundImg/Background/Background'
import ProjectCards from '../components/ProjectCards/ProjectCards'

export default function Project(): JSX.Element {
  return (
    <>
    <BackgroundImg heading = "PROJECTS_" text = "Some of my projects!" page = ""/>
    <ProjectCards/>
    </>
  )
}
