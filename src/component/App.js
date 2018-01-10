// ./src/App.js
import React from 'react';
import Header from "./Header"
import About from "./About"
// import Grid from "material-ui/Grid"
// import { MuiThemeProvider } from 'material-ui/styles';
// import Theme from "../styles/Theme";

// import {
//   BodyType, Header1, Header2, Header3, Header4
// } from "../styles/Typeography"

const App = () => 
  (
    <div className="app">
      <Header />
      <About />
    </div>
  );

export default App