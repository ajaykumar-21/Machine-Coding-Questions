import { useRef, useState } from "react";
import styles from "./Practics.module.css";

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

function Practics() {
  const [data, setData] = useState(initialData);
  const dragValue = useRef();
  const dragkey = useRef();

  const handleOnDragStart = (e, value, key) => {
    dragValue.current = value;
    dragkey.current = key;
    e.target.style.opacity = ".5";
  };

  const handleOnDrag = (key) => {
    const value = dragValue.current;
    const keys = dragkey.current;
    const newData = { ...data };
    newData[keys] = newData[keys].filter((item) => item !== value);
    newData[key] = [...newData[key], value];
    setData(newData);
  };

  const handleOnDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.taskContainer}>
      {Object.keys(data).map((key, index) => (
        <div
          key={index}
          className={styles.keyWrapper}
          onDrop={() => handleOnDrag(key)}
          onDragOver={handleOnDragOver}
        >
          {key}
          {data &&
            data[key].map((value, idx) => (
              <div
                key={idx}
                className={styles.taskWrapper}
                draggable="true"
                onDragStart={(e) => handleOnDragStart(e, value, key)}
                onDragEnd={handleOnDragEnd}
                // onDragOver={handleOnDragOver}
              >
                {value}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Practics;
