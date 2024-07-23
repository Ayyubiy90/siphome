import React from "react";
import Topnav from "./components/Topnav";
import Hero from "./components/Hero";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Topnav />
      <Hero />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
