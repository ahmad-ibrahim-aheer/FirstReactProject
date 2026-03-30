import React from "react";
import Login from "./pages/login";
import "./pages/Pages.css";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
}

export default App;
