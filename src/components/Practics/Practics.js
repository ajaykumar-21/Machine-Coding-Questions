import React, { useEffect, useRef, useState } from "react";
import style from "./Practics.module.css";

const mockData = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
];

function Practics() {
  const inputRef = useRef(null);
  const suggestionRef = useRef(null);
  const [query, setQery] = useState("");
  const [list, setlist] = useState([]);
  const [suggestionAreaVisibility, setSuggestionAreaVisibility] =
    useState(false);

  useEffect(() => {
    if (query.length > 0) {
      setSuggestionAreaVisibility(true);
      const nameData = mockData.map((e) => e.name);
      const filtered = nameData.filter((data) =>
        data.toLowerCase().includes(query.toLowerCase())
      );
      setlist(filtered);
    } else {
      setlist([]);
    }
  }, [query]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      console.log(e.target, inputRef.current, suggestionRef.current);
      if (e.target !== inputRef.current && e.target !== suggestionRef.current) {
        setSuggestionAreaVisibility(false);
      }
    });

    return () => {
      window.removeEventListener("click", () => {});
    };
  });

  return (
    <div className={style.container}>
      <div>
        <h2>Auto Search Suggestions</h2>
        <input
          type="text"
          value={query}
          onChange={(e) => setQery(e.target.value)}
          ref={inputRef}
        />
        {suggestionAreaVisibility && (
          <div className={style.suggestonArea} ref={suggestionRef}>
            {list &&
              list.map((e, i) => (
                <div key={i} onClick={() => setQery(e)}>
                  {e}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Practics;
