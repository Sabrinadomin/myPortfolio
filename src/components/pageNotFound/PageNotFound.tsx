import React from "react"
import './PageNotFoundStyle.css'
import img404 from "../../assets/Page404/404.png"

export default function PageNotFound (): JSX.Element {
  return (
    <div className="not-found">
      <img src={img404}/>
    </div>
  )
}
