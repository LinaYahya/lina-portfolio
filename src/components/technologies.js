import React from "react"
import tools from "../images/tools.png"

const TechnologiesList = () => {
  return (
    <div style={{ width: "90%", margin: " 5% auto" }}>
      <h2>My Technology</h2>
      <img src={tools} alt="tools" style={{objectFit: 'fill', width: '90%'}}/>
    </div>
  )
}

export default TechnologiesList
