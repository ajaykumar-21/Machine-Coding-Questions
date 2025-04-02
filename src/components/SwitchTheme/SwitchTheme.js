import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { ThemeProvider } from "./ThemeContext";

function SwitchTheme() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default SwitchTheme;
