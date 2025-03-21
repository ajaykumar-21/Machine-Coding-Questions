import React, { useEffect, useRef, useState } from "react";
import style from "./Practics.module.css";

const Practics = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`${style.modalContainer} ${
        show ? style.backgroundColor : ""
      }`}
    >
      <button onClick={() => setShow(true)}>
        {show ? "Hide" : "Show"} Modal
      </button>
      {show && (
        <div className={`${style.container} ${show ? style.active : ""}`}>
          <div className={style.wrapper}>
            <div>Modal</div>
            <div className={style.close} onClick={() => setShow(false)}>
              X
            </div>
          </div>
          <div className={style.component}>Modal Component</div>
        </div>
      )}
    </div>
  );
};

export default Practics;
