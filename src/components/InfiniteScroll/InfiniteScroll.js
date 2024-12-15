import React, { useEffect, useState } from "react";

function InfiniteScroll() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    // console.log(
    //   Math.ceil(window.innerHeight + window.scrollY),
    //   window.document.body.offsetHeight
    // );
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

  const element = [];
  for (let i = 1; i <= count; i++) {
    element.push(<div key={i}>{i}</div>);
  }

  return <div>{element}</div>;
}

export default InfiniteScroll;
