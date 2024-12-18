import React, { useEffect, useRef, useState } from "react";
import style from "./Practics.module.css";

const mockData = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
];

function Practics() {
  const [query, setQuery] = useState("");
  const [list, updatList] = useState([]);
  const [visibilityArea, setVisibilityArea] = useState(false);
  const inputRef = useRef();
  const suggestionAreaRef = useRef();
  console.log(inputRef.current, suggestionAreaRef.current);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    onSearch(value);
    setVisibilityArea(true);
  };
  //   console.log(query);

  const onSearch = (value) => {
    console.log(value);
    const filtered = mockData.filter((val) =>
      val.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filtered);
    updatList(filtered);
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        e.target !== inputRef.current &&
        e.target !== suggestionAreaRef.current
      ) {
        setVisibilityArea(false);
      }
    });

    return () => {
      window.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className={`${style["Practice-Conatiner"]}`}>
      <input
        type="text"
        value={query}
        placeholder="Search"
        onChange={handleChange}
        onFocus={() => setVisibilityArea(true)}
        ref={inputRef}
        // onBlur={() => setVisibilityArea(false)}
      />
      {visibilityArea && (
        <div className={`${style["Suggestion-Area"]}`} ref={suggestionAreaRef}>
          {list.map((data, index) => {
            return (
              <div key={index} onClick={() => setQuery(data)}>
                {data}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Practics;
