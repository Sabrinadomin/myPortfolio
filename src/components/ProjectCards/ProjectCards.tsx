import React from "react"
import "./ProjectCardsStyle.css"

export default function ProjectCards(props: { imgSrc: string, title: string, text: string, access: string, view: string }): JSX.Element {
  return (
    <div className="project-card">
      <img src = {props.imgSrc} alt = "Project visualization"></img>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href = {props.access} target = "_blank" rel="noreferrer" className = "btn">Access</a>
          <a href = {props.view} target = "_blank" rel="noreferrer" className = "btn">View</a>
        </div>
      </div>
    </div>
  )
}
