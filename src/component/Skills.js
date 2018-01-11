import React from "react"
import styled from "styled-components"
// Local Dependcies 
import {  BodyType, Header2 } from "../styles/Typeography"
import { SectionContainer }  from "../styles/SiteTools"
import Brand from "../styles/Brand"

const SkillsContainer = SectionContainer.extend`
  background: ${Brand.colors.redGradient};
  div {
    width: 100%;
    @media( min-width: ${Brand.sizes.tablet}) {
      height: 100% !important;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 4em;
    color: #fff;
    &:nth-child(2) {
      margin: 20px;
    }
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  box-shadow : rgba(0, 0, 0, 0.2);
  width: 100%;
  border-radius: 20px;
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
    text-decoration: underline;
    background: ${Brand.colors.greenGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  i {
    font-size: 5em;
    padding: 10px;
    background: ${Brand.colors.greenGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ul {
    list-style: none;
    width: ;
    padding: 0;
    li {
      padding: 5px 0;
      margin: 0;
      font-size: 1.25em;
      font-family: ${Brand.fonts.GothamMed};
      color: ${Brand.colors.grey};
      text-align: center;
    }  
  }


  @media( min-width: ${Brand.sizes.tablet}) {
    width: 25%;
    margin: 20px;
    ul li {
      font-size: 1.75em ;
    }
  }
  @media(min-width: ${Brand.sizes.desktop}) {
    width: 15%;
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
        <div>
          <Card>
            <h3>DEVELOPMENT</h3>
            <i className="fa fa-laptop" />
            <ul>
              <li>HTML5, CSS3</li>
              <li>Javascript/ES6</li>
              <li>React/Redux</li>
              <li>Vue/Vuex</li>

              <li>Node/Express</li>
              <li>PHP7/Laravel</li>
              <li>MySQL</li>
              <li>Git</li>
            </ul>
          </Card>
          <Card float="left">
            <h3>DESIGN</h3>
            <i className="fa fa-pencil" />
            <ul>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Adobe XD</li>
              <li>Lightroom</li>
            </ul>
          </Card>
          <Card float="right">
            <h3>SOFT SKILLS</h3>
            <i className="fa fa-users" />
            <ul>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Adobe XD</li>
              <li>Lightroom</li>
            </ul>
          </Card>
        </div>
        <span>
          <i className="fa fa-eye" />
          &nbsp;
          <i className="fa fa-heart" /> 
          {`  JS`}
        </span>
      </SkillsContainer>
  )

export default Skills
