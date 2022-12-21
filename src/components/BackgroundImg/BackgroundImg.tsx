import React from "react"
import "./BackgroundImgStyle.css"
import mainImg from "../../assets/image-one.jpg"
import { Link } from "react-router-dom"
const resume = `I'm a graduated technician in analysis and development
 of systems,and I have experience on backend development and maintenance 
 for ChatBots, APIs and websites using Node.js. I'm a proactive person who 
 cherishes freedom of speech in the office, both vertically and horizontally. 
 My English skill is average and so are my JavaScript and Python programming 
 languages.`

export default function BackgroundImg(): JSX.Element {
  return (
    <div className="main">
      <div className="mask">
        <img className="background-img" src={mainImg} alt = "main-image"/>
      </div>
      <div className="content">
          <p>{"HI I'M SABRINA CONCEIÇÃO"}</p>
          <h1>Backend Developer</h1>
          <div className="resume">
            <p>{resume}</p>
            <p>More about me:</p>
          </div>
          <div>
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>
      </div>
    </div>
  )
}
