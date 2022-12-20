import React from "react"
import "./BackgroundImgStyle.css"
import mainImg from "../../assets/image-one.jpg"
import { Link } from "react-router-dom"

export default function BackgroundImg(): JSX.Element {
  return (
    <div className="main">
      <div className="mask">
        <img className="background-img" src={mainImg} alt = "main-image"/>
      </div>
      <div className="content">
          <p>{"Hi I'm Sabrina Conceição"}</p>
          <h1>Backend Developer</h1>
          <div>
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>

      </div>

    </div>
  )
}
