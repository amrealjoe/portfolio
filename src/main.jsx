import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Outlet, 
   } from "react-router-dom"
import Home from "@pages/home"
import About from "@pages/about"
import Projects from "@pages/projects"
import Resume from "@pages/resume"
import Skills from "@pages/skills"
import Project from "@pages/project"
import Appbar from "@components/appbar"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  		<Appbar />
  	<Routes>
      <Route path="/">
  		  <Route index element={<Home />} />
        <Route path=":projectName" element={<Project />} />
  		  <Route path="/about" element={<About />} />
  		  <Route path="/projects" element={<Projects />} />
  		  <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
  	</Routes>
  	 <Outlet/>
  </Router>
)
