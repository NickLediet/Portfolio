import React from "react"
import { SectionContainer } from "../styles/SiteTools"
import Brand from "../styles/Brand"
import Logo from "../images/logo_black.svg";

const FooterContainer = SectionContainer.extend`
  background: ${Brand.colors.grey};

  height: 250px;
`

const Footer = () => 
  (
    <FooterContainer>
      <img src={Logo} />

    </FooterContainer>
  )

export default Footer