import React from "react"
import * as dialogPolyfill from "dialog-polyfill"
import { findDOMNode } from "react-dom";
import styled from "styled-components"
import { Header2 } from "../../styles/Typeography"

const LightboxContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
  height: auto;
  width: 80vw;
  background: #fff;
  border-radius 10px;
  over-flow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
  }
`
const Backdrop = styled.div`
  background-color: #000;
  opacity: 0.8;
  filter: blur(250px);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 100vh;
  width: 100vw;
`
const Lightbox = (props) =>
  (
    <div onClick={() => props.close()} style={{display: (props.open ? "block" : "none")}}>
      <Backdrop />
      <LightboxContainer>
        <img src={props.photo.url_m} />
        <Header2>{props.photo.title}</Header2>
      </LightboxContainer>  
    </div>
  )

export default Lightbox