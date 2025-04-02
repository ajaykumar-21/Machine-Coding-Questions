import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

function SwitchTheme() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default SwitchTheme;
