import React from 'react'
import docker from "../../assets/Icons/docker.png"
import node from "../../assets/Icons/node.png"
import git from "../../assets/Icons/git.png"
import ibmCloud from "../../assets/Icons/ibm-cloud.png"
import sql from "../../assets/Icons/sql.png"
import powerP from "../../assets/Icons/power-point.png"
import linux from "../../assets/Icons/linux.png"
import access from "../../assets/Icons/access.png"
import mongoDb from "../../assets/Icons/mongo.png"
import excel from "../../assets/Icons/excel.png"
import azure from "../../assets/Icons/azure-devops.png"
import python from "../../assets/Icons/python.png"
import gitlab from "../../assets/Icons/gitlab.png"
import javascript from "../../assets/Icons/javascript.png"
import word from "../../assets/Icons/word.png"
import netlify from "../../assets/Icons/netlify.png"
import typescript from "../../assets/Icons/typescript.png"
import reactIcon from "../../assets/Icons/react.png"
import sharepoint from "../../assets/Icons/sharepoint.png"
import html from "../../assets/Icons/html.png"
import css from "../../assets/Icons/css.png"
import aws from "../../assets/Icons/aws.png"
import firebase from "../../assets/Icons/firebase.png"
import c from "../../assets/Icons/c.png"
import cSharp from "../../assets/Icons/cSharp.png"
import "./HardSkillStyle.css"

export default function HardSkill(): JSX.Element {
  return (
  <>
    <h1 className="title">My Skills</h1>
    <h3 className='level'>Advanced</h3>
    <div className='img-grid'>
      <img className = "grid-img" src = {git}/>
      <img className = "grid-img" src = {javascript}/>
      <img className = "grid-img" src = {node}/>
      <img className = "grid-img" src = {sql}/>
      <img className = "grid-img" src = {html}/>
      <img className = "grid-img" src = {word}/>
    </div>

    <h3 className='level'>Average</h3>
    <div className='img-grid'>
      <img className = "grid-img" src = {typescript}/>
      <img className = "grid-img" src = {reactIcon}/>
      <img className = "grid-img" src = {python}/>
      <img className = "grid-img" src = {docker}/>
      <img className = "grid-img" src = {azure}/>
      <img className = "grid-img" src = {netlify}/>
      <img className = "grid-img" src = {css}/>
      <img className = "grid-img" src = {sharepoint}/>
      <img className = "grid-img" src = {powerP}/>
      <img className = "grid-img" src = {excel}/>
    </div>

    <h3 className='level'>Begginer</h3>
    <div className='img-grid'>
      <img className = "grid-img" src = {mongoDb}/>
      <img className = "grid-img" src = {gitlab}/>
      <img className = "grid-img" src = {cSharp}/>
      <img className = "grid-img" src = {aws}/>
      <img className = "grid-img" src = {docker}/>
      <img className = "grid-img" src = {firebase}/>
      <img className = "grid-img" src = {ibmCloud}/>
      <img className = "grid-img" src = {c}/>
      <img className = "grid-img" src = {linux}/>
      <img className = "grid-img" src = {access}/>
    </div>
  </>
  )
}
