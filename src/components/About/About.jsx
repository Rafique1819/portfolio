import React from "react";
import "./About.css";
import Card from "../Card/Card";
// import mern form "../../assets/mern.png";

function About({title,image}) {
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : Rafique Ahamad
              </li>
              <li>
                <span>GENDER</span> : Male
              </li>
              <li>
                <span>AGE</span> : 23
              </li>
              <li>
                <span>LANGUAGE</span> : English,Hindi
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education </h1>
            <ul>
              <li>
                <span>DEGREE</span> : B-TECH
              </li>
              <li>
                <span>BRANCH</span> : COMPUTER SCIEINCE & ENGINEERING
              </li>
              <li>
                <span>CGPA</span> : 7.5
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills </h1>
            <ul>
              <li>
                MERN STACK DEVELOPER
              </li>
              <li>
                JAVASCRIPT
              </li>
              <li>
                C
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
} 

export default About;
