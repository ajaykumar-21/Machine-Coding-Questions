import React, { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";

function Home({ percent }) {
  const [value, setValue] = useState(percent);

  useEffect(() => {
    setValue(Math.min(Math.max(percent, 0), 100));
  }, [percent]);

  return (
    <div className={styles.wrapper}>
      <div>Pogress Bar</div>
      <div className={styles.progress}>
        <span>{value.toFixed()}%</span>
        <div style={{ width: `${value}%` }} />
      </div>
      <h5 style={{ marginTop: "5px" }}>
        {value !== 100 ? "loading..." : "Completed"}
      </h5>
    </div>
  );
}

export default Home;
