import React from "react"
import styled from "styled-components"
// Local Dependcies 
import {  BodyType, Header2 } from "../styles/Typeography"
import { SectionContainer }  from "../styles/SiteTools"
import Brand from "../styles/Brand"

const SkillsContainer = SectionContainer.extend`
  background: ${Brand.colors.redGradient};
`

const Card = styled.div`
  box-shadow : rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 25px;
  background: #fff;
  height: auto;
  min-height: 210px;
  float: ${props => props.float ? props.float : "none "}
  &::after {
    display: block;
    content: "";
    clear: both;
  }
  h3 {
    font-family: ${Brand.fonts.GothamBold};
    font-size: 1.5em;
    text-align: center;
    line-height: 2em;
    color: ${Brand.colors.red};
    text-decoration: underline;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  ul {
    list-style: none;
    width: 40%;
    padding: 0;
    li {
      padding: 5px 0;
      margin: 0;
      font-size: 1em;
      font-family: ${Brand.fonts.GothamMed};
      color: ${Brand.colors.grey};
    }  
  }
`

const Skills = () => 
  (
      <SkillsContainer 
        headColor="#fff"
        bodyColor="rgba(255, 255, 255, 0.75)">
        <Header2 upper>Skills</Header2>
        <BodyType>
          I have various development, design and non-technical skills that I can bring. I excel at learning new things. If you want to work someone who will take an interest in what your trying to represent digitally I can help. I am comfortable approaching new platforms, however I am most comfortable in the adobe suite and working with various Javascript frameworks or PHP/Laravel.
        </BodyType>
        <Card>
          <h3>DEVELOPMENT</h3>
          <div>
            <ul>
              <li>HTML5, CSS3</li>
              <li>Javascript/ES6</li>
              <li>React/Redux</li>
              <li>Vue/Vuex</li>
            </ul>
            <ul>
              <li>Node/Express</li>
              <li>PHP7/Laravel</li>
              <li>MySQL</li>
              <li>Git</li>
            </ul>
          </div>
        </Card>
        <Card float="left">
          <h3>DEVELOPMENT</h3>
          <div>
            <ul>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Adobe XD</li>
              <li>Lightroom</li>
            </ul>
          </div>
        </Card>
        <Card float="right">
          <h3>DEVELOPMENT</h3>
          <div>
            <ul>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Adobe XD</li>
              <li>Lightroom</li>
            </ul>
          </div>
        </Card>
      </SkillsContainer>
  )

export default Skills
