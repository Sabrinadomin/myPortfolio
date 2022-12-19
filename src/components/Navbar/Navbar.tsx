import React from "react"
import "./NavbarStyles.css"
import { Link } from "react-router-dom"

export default function Navbar(): JSX.Element {
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/projects" >Projects</Link>
          <Link to="/contact" >Contact</Link>
        </li>
      </ul>
    </div>
  )
}
