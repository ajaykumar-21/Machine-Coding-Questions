import React, { useEffect, useRef, useState } from "react";
import styles from "./Practics.module.css";

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

function Practics() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const suggestionArea = useRef();
  const inputRef = useRef();
  const [visible, setVisible] = useState(false);
  console.log(visible);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    makeApiCall(value);
  };

  const makeApiCall = async (text) => {
    try {
      const data = await getSuggestions(text);
      setSuggestions(data);
    } catch (error) {
      setSuggestions([]);
      console.error("Error while fetching the data", error);
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target !== suggestionArea.current &&
        e.target !== inputRef.current
      ) {
        setVisible(false);
      }
    });

    return () => {
      document.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className={styles.searchContainer}>
      <h1>Auto Search Suggestions</h1>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className={styles.searchInput}
          onFocus={() => setVisible(true)}
          ref={inputRef}
        />
        {visible && (
          <div ref={suggestionArea}>
            {suggestions &&
              suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => setQuery(suggestion)}
                  className={styles.suggestionList}
                  // ref={suggestionArea}
                >
                  {suggestion}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Practics;
