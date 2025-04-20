import React, { useRef, useState } from "react";
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
  const dragItem = useRef();
  const dragKey = useRef();
  console.log(data);

  const handleDragStart = (e, item, key) => {
    dragItem.current = item;
    dragKey.current = key;
    e.target.style.opacity = ".5";
  };

  const handleDragEnd = (e) => {
    e.target.style = "1";
  };

  const handleDrop = (e, key) => {
    const item = dragItem.current;
    const keys = dragKey.current;
    console.log(item, keys, key);
    const newData = { ...data };
    newData[keys] = newData[keys].filter((value) => value !== item);
    newData[key] = [...newData[key], item];
    setData(newData);
  };

  const handleDragOver = (e) => {
    // bydefault container or html which is not allowing to drop on them
    e.preventDefault();
  };

  return (
    <div className={styles.todoContainer}>
      {Object.keys(data).map((key, index) => (
        <div
          key={index}
          className={styles.keyWrapper}
          onDrop={(e) => handleDrop(e, key)}
          onDragOver={handleDragOver}
        >
          {key}
          {data[key].map((item, index) => (
            <div
              key={index}
              className={styles.itemsList}
              draggable
              onDragStart={(e) => handleDragStart(e, item, key)}
              onDragEnd={handleDragEnd}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DragAndDrop;
