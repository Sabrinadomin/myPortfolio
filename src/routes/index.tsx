import React from "react"
import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import PageNotFound from "../components/pageNotFound/PageNotFound"

export default function Router(): JSX.Element {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer/>
    </>
  )
}
