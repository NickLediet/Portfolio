import React from "react"
import * as dialogPolyfill from "dialog-polyfill"
import { findDOMNode } from "react-dom";
import styled from "styled-components"

const Lightbox = styled.dialog`
  border: none;
  height: 80%;
  width: 80%;
  &::backdrop {
    background-color: #333;
    opacity: 0.5;
    filter: blur(250px);
  }
  margin-top: 20px;
  border: none;
  width: 60%;
  height: auto;
  
  #lightbox-popup::backdrop {
    opacity: 0.8;
    background: #000;
  }
  #lightbox-popup #lightbox-title {
    text-align: center;
    font-size: 24px;
  }
  #lightbox-popup #lightbox-image {
    width: 100%;
  }

`

export default Lightbox