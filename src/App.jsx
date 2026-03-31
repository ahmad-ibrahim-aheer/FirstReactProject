import React from "react";
import Login from "./pages/login";
import "./pages/Pages.css";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bundle.min.js";

function App() {
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
}

export default App;
