// ./src/App.js
import React from 'react';
import Header from "./Header"
import About from "./About"
import Skills from "./Skills"
import Gallery from "./gallery/index"
import Contact from "./Contact"
// import Grid from "material-ui/Grid"
// import { MuiThemeProvider } from 'material-ui/styles';
// import Theme from "../styles/Theme";

// import {
//   BodyType, Header1, Header2, Header3, Header4
// } from "../styles/Typeography"
// <Header />
 
const App = () => 
  (
    <div>
      <Header />   
      <About />
      <Skills />
      <Gallery />
      <Contact />
    </div>
  );

export default App