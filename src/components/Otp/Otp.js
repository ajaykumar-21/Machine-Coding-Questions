import React, { useRef, useState } from "react";
import styles from "./Otp.module.css";

const boxes = Array(6).fill(0);
function Otp() {
  const [value, setVlaue] = useState("");
  const ref = useRef();
  console.log(ref);

  const onHandleChange = (e, index) => {
    console.log(e.key);
  };

  
  return (
    <div className={styles.container}>
      {boxes.map((_, index) => (
        <input
          key={index}
          className={styles.otpBox}
          type="text"
          value={value}
          onChange={(e) => onHandleChange(e, index)}
          ref={ref.current}
        />
      ))}
    </div>
  );
}

export default Otp;
