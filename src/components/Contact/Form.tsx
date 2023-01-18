import React, { useRef, useState } from "react"
import "./FormStyle.css"
import emailjs from "@emailjs/browser"

interface formState {
  name: string
  email: string
  subject: string
  message: string
}

export default function Form(): JSX.Element {
  const form = useRef<HTMLFormElement>(null)
  const [contactStatus, setContactStatus] = useState({ success: '', message: '' })
  const [contactInfo, setContactInfo] = useState<formState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  function formValidator(form: object): boolean {
    let formString = JSON.stringify(form)
    formString = formString.replace(/\s\s+/g, ' ')
    form = JSON.parse(formString)
    let errors = 0

    for (const [key, value] of Object.entries(form)) {
      if (value.length === 0) {
        setContactStatus({ success: 'false', message: `Fill the ${key}, please.` })
        errors++
        break
      } else if (value.length < 6) {
        errors++
        setContactStatus({ success: 'false', message: `The ${key} is too short!` })
        break
      } else if (key === 'email') {
        try {
          if (value.split('@')[1].split('.')[1].length >= 2) {
            setContactStatus({ success: '', message: '' })
          } else {
            setContactStatus({ success: 'false', message: `Enter a valid email!` })
            errors++
            break
          }
        } catch (err) {
          setContactStatus({ success: 'false', message: `Enter a valid email!` })
          errors++
          break
        }
      }
    }
    if (errors > 0) {
      return false
    } else {
      return true
    }
  }

  const valueHandler = (e: any): void => {
    setContactInfo({
      ...contactInfo,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleStatus = (status: boolean): void => {
    if (status) {
      setContactStatus({ success: 'true', message: 'Email successfully sent!' })
    } else {
      setContactStatus({ success: 'false', message: 'There was an error sending the email.' })
    }
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const element = e.target as HTMLFormElement

    if (form.current != null) {
      const validatedForm = formValidator(contactInfo)
      if (validatedForm) {
        emailjs.sendForm('service_v2q879k', 'template_otr4ebj', form.current, 'opvtiAC6K9-_-Pyez')
          .then((result) => {
            handleStatus(true)
            element.reset()
          }, (error) => {
            console.log(error.text)
            handleStatus(false)
          })
        contactInfo.name = ''
        contactInfo.email = ''
        contactInfo.subject = ''
        contactInfo.message = ''
      }
    }
  }

  return (
    <div className = "form" >
      <form onSubmit = {sendEmail} ref= {form}>
        <label>Your name *</label>
        <input
          type = "text"
          name = "name"
          onChange = {valueHandler}>
        </input>

        <label>Email *</label>
        <input
          type = "text"
          name = "email"
          onChange = {valueHandler}>
        </input>

        <label>Subject *</label>
        <input
          type = "text"
          name = "subject"
          onChange = {valueHandler}>
        </input>

        <label>Message *</label>
        <textarea
          rows = {6}
          placeholder = "Type your message here"
          name = "message"
          onChange = {valueHandler}
        />

        <button className = "btn">Submit</button>
      </form>
      { contactStatus.success === 'true' ? <p className = "email-status success">{contactStatus.message}</p> : '' }
      { contactStatus.success === 'false' ? <p className = "email-status fail">{contactStatus.message}</p> : '' }
    </div>
  )
}
