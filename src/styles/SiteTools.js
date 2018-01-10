import styled from "styled-components"
import Brand from "../styles/Brand"

export const SectionContainer = styled.section`
  box-sizing: border-box;
  padding: ${Brand.spacing.margin};
  width: 100%;
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