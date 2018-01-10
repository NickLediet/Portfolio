import React from "react"
import styled from "styled-components"

// Local Dependcies 
import {  BodyType, Header2 } from "../styles/Typeography"
import { SectionContainer}  from "../styles/SiteTools"
import Brand from "../styles/Brand"

const About = () => 
  (
      <SectionContainer>
        <Header2>ABOUT ME</Header2>
        <BodyType>
          I am a fullstack developer from London Ontario seeking to develop applications that can best make use of what modern technology has to offer. I am passionate in learning. Both new technologies and the topic of any project, dabbling in anything I can sink my teeth on. Although I do not consider myself a designer, I am extremely passionate about User Experience and believe that software is above all, a tool. 
        </BodyType>
      </SectionContainer>
  )

export default About