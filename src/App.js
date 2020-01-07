import React from 'react';
import Landing from "./pages/landing";
import About from "./pages/about";
import Venue from "./pages/venue";
import Contact from "./pages/contact";
import FAQ from "./pages/faq";
import Sponsors from "./pages/sponsors";

import Footer from "./components/footer";
import NavMenu from "./components/navbar";

import './App.css';


function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Venue />
      <Sponsors />
      <Contact />
      <FAQ />
      <Footer />

    </div>
  );
}

export default App;
