import React, { useState } from "react"
import "./NavbarStyles.css"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar(): JSX.Element {
  const [click, setClick] = useState(false)
  const handleClick = (): void => setClick(!click)
  return (
    <div className="header">
      <Link to="/">
        <h1>Sabrina Conceição</h1>
      </Link>
      <ul className = { click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/projects" >Projects</Link>
          <Link to="/contact" >Contact</Link>
        </li>
      </ul>
      <div className="barsMenu" onClick={handleClick}>
        {click
          ? (<FaTimes size = {20} style = {{ color: "#fff" }}/>)
          : (<FaBars size = {20} style = {{ color: "#fff" }}/>)}
      </div>
    </div>
  )
}
