import React from 'react'
import BackgroundImg from '../components/BackgroundImg/Background/Background'
import Form from '../components/Contact/Form'

export default function Contact(): JSX.Element {
  return (
    <>
      <BackgroundImg heading = 'CONTACT ME_' text = 'Contact me!' page = 'contact'/>
      <Form/>
    </>
  )
}
