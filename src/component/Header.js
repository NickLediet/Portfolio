import React from "react"
import styled from "styled-components"
// import Button from "material-ui/Button"

// Local Dependencies
import Brand from "../styles/Brand"
import {
  Header2, NavLink, Header1
} from "../styles/Typeography"
import MobileBackgroundImg from '../images/header-background-mobile.png';
import DesktopBackgroundImg from "../images/header_background_desktop.png"
import LogoWhite from "../images/logo_white.svg"


const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  min-height: 280px;
  padding-bottom: 25px;
  width: 100vw;
  background:
    linear-gradient(290deg, rgba(143, 143, 143, .6), rgba(62, 52, 83,.6)), 
    url(${MobileBackgroundImg}) no-repeat;
  background-size: cover;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  ${'' /* background: linear-gradient(290deg, rgba(143, 143, 143, .6), rgba(62, 52, 83,.6)), url(${MobileBackgroundImg}) no-repeat;
  background-size: cover; //TODO: fix the background image!
  @media(min-width: ${Brand.sizes.tablet}) {
    background: linear-gradient(290deg, rgba(143, 143, 143, .6), rgba(62, 52, 83,.6)), url(${DesktopBackgroundImg});
    min-height: 690px; 
  } */}
  nav {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    img {
      width: 60px;
      @media (min-width: ${Brand.sizes.tablet}) {
        width: 100px;
      }
    }
    ul {
    // TODO: Center this below the logo @ super small screens
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
  margin: ${props => props.center ? "0 auto;" : ""}
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