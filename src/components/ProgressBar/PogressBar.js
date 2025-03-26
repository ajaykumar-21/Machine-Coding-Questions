import React, { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";
import Home from "./Home";

function PogressBar() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setPercent((prev) => prev + 1);
    }, 100);
  }, []);

//   console.log(percent);

  return (
    <>
      <Home percent={percent} />
    </>
  );
}

export default PogressBar;
