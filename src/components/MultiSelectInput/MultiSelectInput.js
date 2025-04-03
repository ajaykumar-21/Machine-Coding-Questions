import React, { useEffect, useState } from "react";
import styles from "./MultiSelectInput.module.css";

function MultiSelectInput() {
  const [searchUser, setSearchUser] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchUser = () => {
      fetch(`https://dummyjson.com/users/search?q=${searchUser}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch((error) => console.error(error));
    };
    fetchUser();
  }, [searchUser]);
  console.log(suggestions);

  return (
    <div>
      <div className={styles.userSearchInput}>
        <div>
          <input
            type="text"
            placeholder="Search For a User..."
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          />
        </div>
        <div className={styles.suggestion}>
          {suggestions &&
            suggestions?.users?.map((user) => (
              <ul key={user.email}>
                <li>
                  {user.firstName}
                  <span>{"❌"}</span>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MultiSelectInput;
