import React from "react";
import Topnav from "./components/Topnav";
import Hero from "./components/Hero";
import Update from "./components/Update";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Topnav />
      <Hero />
      <Update />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
