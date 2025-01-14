import React, { useEffect, useState } from "react";
import styles from "./TrafficLight.module.css";

const light = {
  red: "red",
  yellow: "yellow",
  green: "green",
};

function TrafficLight() {
  const [active, setActive] = useState(light.red);

  useEffect(() => {
    if (active === light.red) {
      setTimeout(() => {
        setActive(light.yellow);
      }, 4000);
    } else if (active === light.yellow) {
      setTimeout(() => {
        setActive(light.green);
      }, 500);
    } else if (active === light.green) {
      setTimeout(() => {
        setActive(light.red);
      }, 3000);
    }

    // switch (active) {
    //   case light.red:
    //     setTimeout(() => {
    //       setActive(light.yellow);
    //     }, 4000);
    //     break;
    //   case light.yellow:
    //     setTimeout(() => {
    //       setActive(light.green);
    //     }, 500);
    //     break;
    //   case light.green:
    //     setTimeout(() => {
    //       setActive(light.red);
    //     }, 3000);
    //     break;
    // }
  }, [active]);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.red} ${styles.traffic}`}
        style={active !== "red" ? { opacity: 0.5 } : null}
      >
        A
      </div>
      <div
        className={`${styles.yellow} ${styles.traffic}`}
        style={active !== "yellow" ? { opacity: 0.5 } : null}
      >
        B
      </div>
      <div
        className={`${styles.green} ${styles.traffic}`}
        style={active !== "green" ? { opacity: 0.5 } : null}
      >
        C
      </div>
    </div>
  );
}

export default TrafficLight;
