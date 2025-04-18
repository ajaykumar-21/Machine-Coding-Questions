import React from "react";
import { Link } from "react-router-dom";
import styles from "./SwitchTheme.module.css";
import { useTheme } from "./ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className={`${styles.wrapper} ${theme}`}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;
