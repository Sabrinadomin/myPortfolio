import React, { Component } from "react"
import "./BackgroundImgStyle.css"

export default class BackgroundImg extends Component<{ heading: string, text: string, page: string }, {}> {
  render(): JSX.Element {
    return (
      <div className = {this.props.page.length > 1 ? `hero-img ${this.props.page}` : "hero-img" }>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}
