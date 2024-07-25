import React from "react";
import Topnav from "./components/Topnav";
import Hero from "./components/Hero";
import Update from "./components/Update";
import Services from "./components/Services";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Topnav />
      <Hero />
      <Update />
      <Services />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
