import React, { useEffect, useRef, useState } from "react";
import style from "./Practics.module.css";

const Practics = () => {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      if (
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.body.offsetHeight - 10
      ) {
        setCount(count + 50);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [count]);

  const elements = [];
  for (let i = 0; i <= count; i++) {
    elements.push(<div key={i}>{i}</div>);
  }
  return elements;
};

export default Practics;
