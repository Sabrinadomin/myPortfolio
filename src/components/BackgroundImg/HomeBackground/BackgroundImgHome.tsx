import React from "react"
import "./HomeBackgroundImgStyle.css"
import mainImg from "../../../assets/home-background.jpg"
import { Link } from "react-router-dom"
const resume = `I'm a graduated technician in analysis and development
 of systems and I have experience on backend development and maintenance 
 for ChatBots, APIs and websites using Node.js.`

export default function BackgroundImgHome(): JSX.Element {
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
            <Link to="/about" className="btn btn-light">About</Link>
          </div>
      </div>
    </div>
  )
}
