import React from "react"
import "./ProjectBackgroundImgStyle.css"
import laptopImg from "../../../assets/laptop-from-above.jpg"

export default function BackgroundImgProjects(): JSX.Element {
  return (
    <div className="main">
      <div className="mask">
        <img className="background-img" src={laptopImg} alt = "main-image"/>
      </div>
      <div className="content">
          <p>{"HI I'M SABRINA CONCEIÇÃO"}</p>
          <h1>Backend Developer</h1>
      </div>
    </div>
  )
}
