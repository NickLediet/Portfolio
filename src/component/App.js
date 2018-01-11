// ./src/App.js
import React from 'react';
import Header from "./Header"
import About from "./About"
import Skills from "./Skills"
import Gallery from "./gallery/index"
import Contact from "./Contact"
import Projects from "./projects"
import Footer from "./Footer"

const App = () => 
  (
    <div>
      <Header />   
      <About />
      <Skills />
      {/* <Projects /> */}
      <Gallery />
      <Contact />
      {/* <Footer /> */}
    </div>
  );

export default App