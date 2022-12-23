import React from "react"
import ProjectCards from "./ProjectCards"
import ProjectCardData from "./ProjectData"
import "./ProjectCardsStyle.css"

export default function Card(): JSX.Element {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((val, ind) => {
          return (
            <ProjectCards
            key = {ind}
            imgSrc = {val.imgSrc}
            title = {val.title}
            text = {val.text }
            view = {val.view}
            access = {val.access}
            />
          )
        })}
      </div>
    </div>
  )
}
