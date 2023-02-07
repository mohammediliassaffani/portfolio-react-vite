import React from "react";
import Sidenav from "./components/sidenav/Sidenav";
import Main from "./components/home/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Main />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
