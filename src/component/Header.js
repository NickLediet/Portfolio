import React from "react"
import styled from "styled-components"
// import Button from "material-ui/Button"

// Local Dependencies
import Brand from "../styles/Brand"
import {
  Header2, NavLink, Header1
} from "../styles/Typeography"
import MobileBackgroundImg from '../images/header_background_mobile.png'
import DesktopBackgroundImg from "../images/header_background_desktop.png"
import LogoWhite from "../images/logo_white.svg"


const HeaderContainer = styled.header`
  box-sizing: border-box;
  min-height: 280px;
  box-sizing: border-box;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  width: 100%;
  padding-bottom: 25px;
  background: linear-gradient(290deg, rgba(143, 143, 143, .6), rgba(62, 52, 83,.6)), url(${MobileBackgroundImg}) no-repeat;
  background-size: cover; //TODO: fix the background image!
  display: grid;
  grid-row-template: 1fr 2fr 1fr 1fr;
  @media(min-width: ${Brand.sizes.tablet}) {
    background: linear-gradient(290deg, rgba(143, 143, 143, .6), rgba(62, 52, 83,.6)), url(${DesktopBackgroundImg});
    min-height: 690px; 
  }
  nav {
    box-sizing: border-box;
    padding: 0px 50px;
    grid-row: 1 / 2;
    img {
      width: 60px;
      padding: 20px;
      float : left; 
      @media (min-width: ${Brand.sizes.tablet}) {
        width: 100px;
      }
    }
    ul {
      float: right; // TODO: Center this below the logo @ super small screens
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
    button {
      margin: 0 auto;
    }
  }
`
export const Tagline = Header1.extend`
  clear: both;
  grid-row: 2 / 3;
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
  width: 90%;
  line-height: 43px;
  letter-spacing: -0.036em;
  margin: 0 auto;
  margin-bottom: 25px;
  @media (min-width: ${Brand.sizes.tablet}) {
    font-size: 2.5em;
    text-align: center;
  }
`
export const Button = styled.button`
  border: none;
  background: ${Brand.colors.red};
  font: 12px ${Brand.fonts.GothamBold};
  text-transform: uppercase;
  color: #ffffff;
  padding: 20px;
  width:150px;
  cursor: pointer;
  ${'' /* FROM CODEPEN :  https://codepen.io/sdthornton/pen/wBZdXq*/}
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  ${'' /* really a one time thing */}
  ${props => props.center ? "margin: 0 auto;" : ""}
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  @media(min-width: ${Brand.sizes.tablet}) {
    font-size: 1em;
    width: 200px;
    padding: 5px;
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