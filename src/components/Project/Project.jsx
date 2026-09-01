import React from 'react'
import "./Project.css"
import Card from '../Card/Card'
import virtual from "../../assets/va.png"
import fitness from "../../assets/fw.png"
import chatboat from "../../assets/cb.png"
import textimage from "../../assets/tti.png"
import bgremover from "../../assets/br.png"
import engine from "../../assets/ise.png"
function  Project() {
  return (
    <div id='projects'>
      <h1 id='para'>2+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        <Card title={"VIRTUAL ASSISTANT"} image={virtual}/>
        <Card  title={"AI POWERDER FITNESS WEBSITE"} image={fitness}/>
        <Card  title={"AI CHATBOAT"} image={chatboat}/>
        <Card  title={"AI TEXT TO IMAGE"} image={textimage}/>
        <Card  title={"AI BACKGROUND REMOVER"} image={bgremover}/>
        <Card  title={"IMAGE SEARCH ENIGNE"} image={engine}/>
      </div>
    </div>
  )
}

export default  Project