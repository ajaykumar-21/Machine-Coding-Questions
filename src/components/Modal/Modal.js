import React, { useState } from "react";
import styles from "./Modal.module.css";

function Modal() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>
        {show ? "hide" : "show"} modal
      </button>
      <div
        className={`${styles.backdrop} ${show ? styles.backDropColor : ""}`}
        onClick={() => setShow(false)}
      >
        {show && (
          <div className={`${styles.wrapper} ${show ? styles.active : ""}`}>
            <div className={styles.header}>
              <div className={styles.title}>Modal</div>
              <div className={styles.closeModal} onClick={() => setShow(false)}>
                X
              </div>
            </div>
            <div className={styles.heading}>Modal Component</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Modal;
