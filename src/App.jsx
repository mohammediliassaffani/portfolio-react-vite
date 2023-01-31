import React from "react";
import Sidenav from "./components/sidenav/Sidenav";
import Main from "./components/home/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Main />
    </div>
  );
}

export default App;
