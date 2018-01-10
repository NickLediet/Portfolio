import styled from "styled-components"
import Brand from "../styles/Brand"

export const SectionContainer = styled.section`
  box-sizing: border-box;
  padding: ${Brand.spacing.margin};
  width: 100vw;
  h2 {
    margin: 0 auto;
    color: ${props => props.headColor ? props.headColor : Brand.colors.red};
    text-align: center;
    padding: 20px;
  }
  p {
    color: ${props => props.bodyColor ? props.bodyColor : Brand.colors.grey};
  }
  @media (min-width: ${Brand.sizes.desktop}) {
    p {
      width: 60%;
      margin: 0 auto;
    }
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
    font-size: 1.25em;
    width: 200px;
    padding: 20px;
  }

`