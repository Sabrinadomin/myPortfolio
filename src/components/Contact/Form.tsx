import React, { useRef, useState } from "react"
import "./FormStyle.css"
import emailjs from "@emailjs/browser"

export default function Form(): JSX.Element {
  const form = useRef<HTMLFormElement>(null)
  const [emailSent, setEmailStatus] = useState({ success: '', message: '' })
  const handleStatus = (status: boolean): void => {
    if (status) {
      setEmailStatus({ success: 'true', message: 'Email successfully sent!' })
    } else {
      setEmailStatus({ success: 'false', message: 'There was an error sending the email.' })
    }
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (form.current != null) {
      console.log('passei')
      emailjs.sendForm('service_v2q879k', 'template_otr4ebj', form.current, 'opvtiAC6K9-_-Pyez')
        .then((result) => {
          handleStatus(true)
        }, (error) => {
          console.log(error.text)
          handleStatus(false)
        })
    }
  }

  return (
    <div className = "form" >
      <form onSubmit = {sendEmail} ref= {form}>
        <label>Your name</label>
        <input type = "text" name = "user_name"></input>
        <label>Email</label>
        <input type = "email" name = "user_email"></input>
        <label>Subject</label>
        <input type = "text" name = "subject"></input>
        <label>Message</label>
        <textarea rows = {6} placeholder = "Type your message here" name = "message"/>
        <button className = "btn">Submit</button>
      </form>
      { emailSent.success === 'true' ? <p className = "email-status success">{emailSent.message}</p> : '' }
      { emailSent.success === 'false' ? <p className = "email-status fail">{emailSent.message}</p> : '' }
    </div>
  )
}
