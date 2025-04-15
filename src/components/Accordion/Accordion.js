import React from "react";
import data from "./data.json";
import Faq from "./Faq";
import styles from "./Accordion.module.css";

function Accordion() {
  return (
    <div>
      <h1 className={styles.faqHeading}>FAQ</h1>
      {data && data.map((faq, idx) => <Faq faq={faq} key={idx} />)}
    </div>
  );
}

export default Accordion;
