import Flexbox from "./01-flexbox/Flexbox"
import React from "react"
import BasicElements from "./00-basic-elements/Elements"
import './app.scss'

const App = () => {
  return (
    <div>
      <div className="section">
        <h1>0. Layouts: Basic Elements</h1>
        <BasicElements/>
      </div>
      <div className="section">
        <h1>1. Intro to flexbox</h1>
        <Flexbox/>
      </div>
    </div>
  )
}

export default App
