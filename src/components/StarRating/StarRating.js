import React, { useState } from "react";
import styles from "./StarRating.module.css";

function StarRating({ value = 5 }) {
  const [startVlaue, setStartVlaue] = useState();
  const [hoverValue, setHoverValue] = useState(0);
  return (
    <div>
      {Array(value)
        .fill(0)
        .map((val, idx) => (
          <span
            className={`${
              (hoverValue === 0 && idx < startVlaue) || idx < hoverValue
                ? styles.gold
                : ""
            }`}
            key={idx}
            onClick={() => setStartVlaue(idx + 1)}
            onMouseEnter={() => setHoverValue(idx + 1)}
            onMouseLeave={() => setHoverValue(0)}
          >
            &#9733;
          </span>
        ))}
    </div>
  );
}

export default StarRating;
