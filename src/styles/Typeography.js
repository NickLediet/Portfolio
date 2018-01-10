
import React from "react"
import styled from "styled-components"
import Brand from "./Brand"
/**
 * Headers
 * Body
 */

export const BodyType = styled.p`
  font-family : ${Brand.fonts.GothamMed};
  font-size : 0.875em;
  line-height : 2em;
  color : ${props => props.dark ?  Brand.colors.darkType : Brand.colors.grey };
  @media (min-width : ${Brand.sizes.tablet}) {
    font-size: 1.5em;
    line-height : 2em;
  }
`

export const Header1 = styled.h1`
  font-family : ${Brand.fonts.GothamBold};
  text-transform : ${props => props.upper ? "upercase"  : "none"}
  text-align: center;
  font-size: 2em;
  line-height: 1.25em;
  color : ${props => props.dark ?  Brand.colors.darkType : Brand.colors.grey };
  @media (min-width : ${Brand.sizes.tablet}) {
    font-size: 2.5em;
    line-height: 1.125em
  }
  @media (min-width: ${Brand.sizes.desktop}) {
    font-size: 3em;
    line-height: 1.05em
  }
`

export const Header2 = styled.h2`
  font-family : ${Brand.fonts.GothamBold};
  text-transform : ${props => props.upper ? "uppercase"  : "none"};
  text-align : ${props => props.align};
  font-size : 1.625em;
  line-height: 1.1538em;
  color : ${props => props.dark ?  Brand.colors.darkType : Brand.colors.grey };
  @media (min-width: ${Brand.sizes.tablet}) {
    font-size: 2em;
    line-height: 1.25em;
  }
  @media (min-width: ${Brand.sizes.desktop}) {
    font-size: 2.25em;
  }
`
export const Header3 = styled.h3`
  font-family : ${Brand.fonts.GothamBold};
  text-transform : uppercase;
  font-size: 1.375em;
  line-height: 1.136em;
  color : ${props => props.dark ?  Brand.colors.darkType : Brand.colors.grey };
  @media (min-width : ${Brand.sizes.tablet}) {
    font-size: 1.5em;
    line-height: 1.25em;
  }
  @media (min-width : ${Brand.sizes.desktop}) {
    font-size: 1.75em
  }

`
export const Header4 = styled.h4`
  font-family: ${Brand.fonts.GothamBold};
  text-transform: uppercase;
  font-size: 1.25em;
  line-height: 1.111em;
  color : ${props => props.dark ?  Brand.colors.darkType : Brand.colors.grey };
  @media( min-width: ${Brand.sizes.tablet}) {
    line-height: 1.222em
  }
`
export const NavLink = styled.a`
  font-family: ${Brand.fonts.GothamBold};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: ${Brand.textUtils.letterSpacing};
  line-height: 1.8em;
  font-size: 0.75em;
  transition: all 0.25s ease-in-out;
  &:hover {
    color: ${Brand.colors.red};
    text-decoration: underline;
    cursor: pointer;
  }
  @media (min-width: ${Brand.sizes.tablet}){
    font-size: 1.5em;
  }
`