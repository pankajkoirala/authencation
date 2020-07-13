import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Route from "./container/route/index"
import NavBar from "./container/share/navBar/navBar"
import "./App.css"

function App() {
  return (
    <div className=" container">
      <Router>
        <NavBar />
        <Route />
      </Router>
    </div>
  )
}

export default App
