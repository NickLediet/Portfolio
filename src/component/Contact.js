import React from "react"
import styled from "styled-components"
import {
  Header2, Header3
} from "../styles/Typeography"
import Brand from "../styles/Brand"
import { Button, SectionContainer } from '../styles/SiteTools';

const ContactContainer = SectionContainer.extend`
  background: ${Brand.colors.redGradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #fff;
  }
  h3 {
    color: #fff;
  }
`

const FormContainer = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  justify-content: space-between;
  width: 100%;
  height: 350px;
  *  {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border: none;
    border-radius: 10px;
    font-family: ${Brand.fonts.GothamMed};
    font-size: 1.5em;
    box-sizing: border-box;
    padding-left: 20px;
    &:hover, &:focus {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }
  @media (min-width: ${Brand.sizes.desktop}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 250px;
    #fullname {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
    #email {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }
    #message {
      grid-row: 1 / 4;
      grid-column: 2 / 3
    }
  }
  #message { 
    padding-top: 10px;
    resize:none;
  }
`

class Contact extends React.Component {
  sendForm() {
    const data = {
      name : this.fullname.value,
      email : this.email.value,
      message : this.message.value
    }

    console.log(data)

    fetch(`/email`, {
      method : "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(data)
    })
    .then(data => data.json())
    .then(data => console.log(data))
  }
  render() {
    return   (
      <ContactContainer>
        <Header2 upper dark>CONTACT</Header2>
        <Header3>Ready to try me out?</Header3>
        <FormContainer>
          <input type="text" id="full-name" 
            ref={input => this.fullname = input}
            placeholder="Full Name"/>
          <input type="email" id="email" 
            ref={input => this.email = input}
            placeholder="Email"/>
          <textarea id="message" 
            ref={input => this.message = input}
            placeholder="Message" />
        </FormContainer>
        <Button 
          onClick={() => this.sendForm()}
          color={Brand.colors.greenGradient}>send</Button>
      </ContactContainer>
    )
  }
}

export default Contact
/**
 * - 2 text
*  - 1 text area
 */