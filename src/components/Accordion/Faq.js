import React, { useState } from "react";
import styles from "./Accordion.module.css";

function Faq({ faq }) {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <h2>
        {faq.question}{" "}
        <span onClick={() => setShow(!show)}>{show ? "-" : "+"}</span>
      </h2>
      {show ? <p>Answer: {faq.answer}</p> : ""}
    </div>
  );
}

export default Faq;
