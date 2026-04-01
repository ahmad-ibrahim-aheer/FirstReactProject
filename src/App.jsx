import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "bootstrap/dist/js/bootstrap.min.js";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/inc/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <br />
    </>
  );
}

export default App;
