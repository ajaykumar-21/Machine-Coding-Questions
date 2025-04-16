import React, { useState } from "react";
import data from "./data.json";
import styles from "./Tab.module.css";

function Tab() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className={styles.tabContainer}>
      <div className={styles.btnContainer}>
        {data.map((btn, idx) => (
          <button
            className={`${styles.tabBtn} ${
              currentTab === idx ? styles.active : ""
            }`}
            onClick={() => setCurrentTab(idx)}
          >
            {btn.button}
          </button>
        ))}
      </div>
      <div className={styles.content}>{data[currentTab].content}</div>
    </div>
  );
}

export default Tab;
