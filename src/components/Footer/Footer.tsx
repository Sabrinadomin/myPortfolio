import React from "react"
import "./FooterStyle.css"
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

export default function Footer(): JSX.Element {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="phone">
            <h4>
            <FaPhone size = {20} style = {{ color: "#fff", marginRight: "2rem" }}/>
            <a href = "https://wa.me/+5511966473336" target = "_blank" rel="noreferrer">(11) 96647-3336</a>
            </h4>
          </div>

          <div className="email">
            <h4>
            <FaMailBulk size = {20} style = {{ color: "#fff", marginRight: "2rem" }}/>
            sabrinadomin14@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <div className="social">
            <a href="https://www.linkedin.com/in/sabrinadominguesconceicao/" target = "_blank" rel="noreferrer">
            <FaLinkedin size = {40} style = {{ color: "#fff", marginRight: "2rem" }}/>
            </a>

            <a href="https://github.com/Sabrinadomin" target = "_blank" rel="noreferrer">
            <FaGithub size = {40} style = {{ color: "#fff", marginRight: "2rem" }}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
