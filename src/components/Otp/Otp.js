import React, { useRef, useState } from "react";
import styles from "./Otp.module.css";

const boxes = Array(6).fill("");
function Otp() {
  const [inputField, setInputField] = useState(boxes);
  const ref = useRef([]);

  const handleKeyDown = (e, index) => {
    const { key } = e;
    const copyValue = [...inputField];

    if (key === "ArrowRight") {
      if (index + 1 < inputField.length) {
        ref.current[index + 1].focus();
        return;
      }
    }

    if (key === "ArrowLeft") {
      if (index !== 0) {
        ref.current[index - 1].focus();
        return;
      }
    }

    if (key === "Backspace") {
      if (index !== 0) {
        copyValue[index] = "";
        setInputField(copyValue);
        ref.current[index - 1].focus();
        return;
      } else {
        copyValue[index] = "";
        setInputField(copyValue);
      }
    }

    if (isNaN(key)) {
      return;
    }

    if (index + 1 < inputField.length) {
      ref.current[index + 1].focus();
    }
    copyValue[index] = key;
    setInputField(copyValue);
  };

  return (
    <div className={styles.container}>
      {inputField &&
        inputField.map((value, index) => (
          <input
            key={index}
            className={styles.otpBox}
            type="text"
            value={value}
            //   onChange={(e) => onHandleChange(e)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(currentInput) => (ref.current[index] = currentInput)}
          />
        ))}
    </div>
  );
}

export default Otp;
