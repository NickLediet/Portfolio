import React from "react"
import styled from "styled-components"
// import Button from "material-ui/Button"

// Local Dependencies
import Brand from "../styles/Brand"
import {
  Header2, NavLink, Header1
} from "../styles/Typeography"
import MobileBackgroundImg from '../images/header-background-mobile.png';
import DesktopBackgroundImg from "../images/header-background-desktop.png"
import LogoWhite from "../images/logo_white.svg"
import { Button } from "../styles/SiteTools"

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  min-height: 280px;
  padding-bottom: 25px;
  width: 100vw;
  overflow:hidden;
  background:
    linear-gradient(290deg, rgba(143, 143, 143, .6), rgba(62, 52, 83,.6)), 
    url(${MobileBackgroundImg}) no-repeat;
  background-size: cover;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  @media(min-width: ${Brand.sizes.desktop}) {
    background:
      linear-gradient(290deg, rgba(143, 143, 143, .6), rgba(62, 52, 83,.6)), 
      url(${DesktopBackgroundImg}) no-repeat;
    background-size: cover;
    height: 80vh;
    h1 {
      margin-top: 180px;
    }
  }

  nav {
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 20px;
    @media (min-width: ${Brand.sizes.tablet}) {
      flex-direction: row;
      justify-content: space-between;
      width:100%;
      padding: 20px 50px;
    }
    img {
      width: 60px;
      @media (min-width: ${Brand.sizes.tablet}) {
        width: 100px;
      }
    }
    ul {
    // TODO: Center this below the logo @ super small screens
      padding: 0;	
      margin-top: 30px;
      li {
        display: inline;
        color: #fff;
        padding: 10px;
        @media (min-width: ${Brand.sizes.desktop}) {
          padding: 30px;
        }
      }
    }
  }
`
export const Tagline = Header1.extend`
  clear: both;
  text-align: center;
  text-shadow: ${Brand.textUtils.shadow};
  @media (min-width: ${Brand.sizes.tablet}) {
    font-size: 4.5em;
  }
`
export const SubTagline = Header2.extend`
  font-family: ${Brand.fonts.GothamMed};
  text-shadow: ${Brand.textUtils.shadow}
  font-size: 16px;
  line-height: 43px;
  letter-spacing: -0.036em;
  margin-bottom: 25px;
  width: 80%;
  @media (min-width: ${Brand.sizes.tablet}) {
    font-size: 2.5em;
    text-align: center;
  }
`


const Header = (props) => (
  <HeaderContainer>
        <nav>
          <img src={LogoWhite} />
          <ul style={{display: "inline"}}>
              <li><NavLink>
                Projects
              </NavLink></li>
              <li><NavLink>
                Photography
              </NavLink></li>
              <li><NavLink>
                Contact
              </NavLink></li>
          </ul>         
        </nav>
        <Tagline dark upper align="center">HI I'M NICK LEDIET</Tagline>
        <SubTagline dark>I'm a fullstack developer specializing in Node.js, React and PHP</SubTagline>
        <Button center>Contact Me!</Button>
      {/* 
          - Nav / Logo
          - Headline
          - SubHeadline
          - Call to action btn
       */}
  </HeaderContainer>
)

export default Header