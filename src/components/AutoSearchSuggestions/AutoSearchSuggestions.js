import React, { useState, useEffect, useRef } from "react";
import style from "./AutoSearchSuggestions.module.css";

// const mockData = [
//   { id: 1, name: "Leanne Graham" },
//   { id: 2, name: "Ervin Howell" },
//   { id: 3, name: "Clementine Bauch" },
// ];

// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

function AutoSearchSuggestions() {
  const inputRef = useRef();
  const suggestionAreaRef = useRef();
  const [query, setQuery] = useState("");
  const [list, updateList] = useState([]);
  const [suggestionAreaVisibility, setSuggestionAreaVisibility] =
    useState(false);

  console.log(inputRef.current);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    // searchInput(value);
    setSuggestionAreaVisibility(true);
    makeApiCall(value);
  };

  // const searchInput = (query) => {
  //   const filtered = mockData
  //     .map((data) => data.name)
  //     .filter((val) =>
  //       val.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  //     );
  //   updateList(filtered);
  //   console.log(filtered);
  // };

  const makeApiCall = async (query) => {
    try {
      const res = await getSuggestions(query);
      updateList(res);
    } catch (error) {
      updateList([]);
      console.log("Error while fatching the data", error);
    }
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      console.log(e.target);
      if (
        e.target !== inputRef.current &&
        e.target !== suggestionAreaRef.current
      ) {
        setSuggestionAreaVisibility(false);
      }
    });

    return () => {
      window.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.heading}>AUTO SEARCH SUGGESTIONS</div>
      <input
        className={style.searchArea}
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setSuggestionAreaVisibility(true)}
        // onBlur={() => setSuggestionAreaVisibility(false)}
        ref={inputRef}
      />
      {suggestionAreaVisibility && (
        <div className={style.suggestionArea} ref={suggestionAreaRef}>
          {list &&
            list.map((data, idx) => (
              <div
                onClick={() => setQuery(data)}
                className={style.suggestionsList}
                key={idx}
              >
                {data}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default AutoSearchSuggestions;
