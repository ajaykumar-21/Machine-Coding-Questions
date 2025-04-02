import React from "react";
import { useTheme } from "./ThemeContext";
import { useContext } from "react";
import styles from "./SwitchTheme.module.css";

function Home() {
  const { theme, toggleTheme } = useTheme();

  return <div className={`${styles.page} ${theme}`}>Home</div>;
}

export default Home;
