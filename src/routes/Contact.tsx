import React from 'react'
import BackgroundImg from '../components/BackgroundImg/Background/Background'
import Form from '../components/Contact/Form'

export default function Contact(): JSX.Element {
  return (
    <>
      <BackgroundImg heading = 'CONTACT ME_' text = 'Did you like my work? Any suggestion? An opinion? Contact me!' page = 'contact'/>
      <Form/>
    </>
  )
}
