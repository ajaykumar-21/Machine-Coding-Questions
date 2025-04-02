import React from "react";
import { Link } from "react-router-dom";
import styles from "./SwitchTheme.module.css";

function Navbar() {
  return (
    <div className={styles.wrapper}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Navbar;
