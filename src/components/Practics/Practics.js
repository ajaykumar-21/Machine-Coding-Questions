import React, { act, useEffect, useRef, useState } from "react";
import style from "./Practics.module.css";

const light = {
  red: "red",
  yellow: "yellow",
  green: "green",
};
function Practics() {
  const [active, setActive] = useState(light.red);

  useEffect(() => {
    if (active === light.red) {
      setTimeout(() => {
        setActive(light.green);
      }, 4000);
    } else if (active === light.green) {
      setTimeout(() => {
        setActive(light.yellow);
      }, 5000);
    } else {
      setTimeout(() => {
        setActive(light.red);
      }, 3000);
    }
  }, [active]);

  return (
    <>
      <div class className={style.wrapper}>
        <div
          className={`${style.red} ${style.traffic}`}
          style={active !== "red" ? { opacity: 0.5 } : null}
        >
          A
        </div>
        <div
          className={`${style.green} ${style.traffic}`}
          style={active !== "green" ? { opacity: 0.5 } : null}
        >
          B
        </div>
        <div
          className={`${style.yellow} ${style.traffic}`}
          style={active !== "yellow" ? { opacity: 0.5 } : null}
        >
          C
        </div>
      </div>
    </>
  );
}

export default Practics;
