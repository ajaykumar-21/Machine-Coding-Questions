import React, { useState } from "react";
import styles from "./DragAndDrop.module.css";

const initialData = {
  Todo: [
    "Design UI Makeup",
    "Set up project repository",
    "Write unit test",
    "Integrate payment gateway",
  ],
  "In Progress": [
    "Develop authentication flow",
    "Implement New features",
    "Connecting to the main gate",
  ],
  Completed: [
    "Set up CI/CD pipeline",
    "Conduct code reviews",
    "Deploy initial cersion to staging",
  ],
};

function DragAndDrop() {
  const [data, setData] = useState(initialData);

  return (
    <div className={styles.todoContainer}>
      {Object.keys(data).map((key, index) => (
        <div key={index} className={styles.keyWrapper}>
          {key}
          {/* <div className={styles.itemsWrapper}> */}
            {data[key].map((items, index) => (
              <div key={index} className={styles.itemsList}>
                {items}
              </div>
            ))}
          {/* </div> */}
        </div>
      ))}
    </div>
  );
}

export default DragAndDrop;
