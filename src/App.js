import React from "react";
import Topnav from "./components/Topnav";
import Hero from "./components/Hero";
import Update from "./components/Update";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Topnav />
      <Hero />
      <Update />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
