import React, { useState } from "react";
import styles from "./Password.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Password() {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleShowHideBtn = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <input
        type={visible ? "text" : "password"}
        value={password}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {password && (
        <FontAwesomeIcon
          icon={visible ? faEye : faEyeSlash}
          className={styles.eyeIcon}
          onClick={handleShowHideBtn}
        />
      )}
    </div>
  );
}

export default Password;
