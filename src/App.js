import React from 'react';
import logo from './logo.svg';
import Landing from "./pages/landing";
import About from "./pages/about";
import Venue from "./pages/venue";
import Contact from "./pages/contact";
import FAQ from "./pages/faq";
import Footer from "./components/footer";
import NavMenu from "./components/navbar";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import './App.css';


function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Venue />
      <Contact />
      <FAQ />
      <Footer />
    
    </div>
  );
}

export default App;
