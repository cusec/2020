import React from 'react';
import logo from './logo.svg';
import Landing from "./pages/landing";
import About from "./pages/about";
import Venue from "./pages/venue";
import Contact from "./pages/contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Venue/>
      <Contact/>
    </div>
  );
}

export default App;
