import React, { useEffect, useState } from "react";
import style from "./Practics.module.css";

function Practics() {
  const [count, setCount] = useState(50);

  const onScroll = () => {
    console.log(
      window.innerHeight + window.scrollY,
      window.document.body.offsetHeight - 50
    );
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.offsetHeight - 50
    ) {
      setCount(count + 50);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, [count]);

  const element = [];
  for (let i = 1; i <= count; i++) {
    element.push(<div>{i}</div>);
  }

  return (
    <div>
      <div>{element}</div>
    </div>
  );
}

export default Practics;
