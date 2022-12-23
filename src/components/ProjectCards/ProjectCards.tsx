import React from "react"
import "./ProjectCardsStyle.css"
import antidoryVisual from "../../assets/antidory-vis.png"
import { NavLink } from "react-router-dom"

export default function ProjectCards(): JSX.Element {
  return (
    <div className="card-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src = {antidoryVisual} alt = "antidory-visualization"></img>
          <h2 className="project-title">Antidory Bot</h2>
          <div className="project-detail">
            <p>A telegram bot made with node.js and mongoDB! Never forget to buy something again. 🐠</p>
            <div className="project-btns">
              <NavLink to = "https://t.me/AntidoryBot" className = "btn">Access</NavLink>
              <NavLink to = "https://t.me/AntidoryBot" className = "btn">Access</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
