import React, { useEffect, useState } from "react";
import styles from "./MultiSelectInput.module.css";

function MultiSelectInput() {
  const [searchUser, setSearchUser] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [visibilty, setVisibility] = useState(false);

  useEffect(() => {
    const fetchUser = () => {
      if (searchUser.trim() === "") {
        setSuggestions([]);
        return;
      }
      setVisibility(true);

      fetch(`https://dummyjson.com/users/search?q=${searchUser}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch((error) => console.error(error));
    };
    fetchUser();
  }, [searchUser]);

  const addUser = (user) => {
    setSelectedUser([...selectedUser, user]);
    setVisibility(false);
    setSuggestions([]);
  };
  console.log(selectedUser);

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
        <div className={styles.selectedUserArea}>
          {selectedUser &&
            selectedUser.map((user) => (
              <div className={styles.selectedUser}>
                {user.firstName} <span>{"❌"}</span>
              </div>
            ))}
        </div>
        {visibilty && (
          <div className={styles.suggestion}>
            {suggestions &&
              suggestions?.users?.map((user) => (
                <ul key={user.email}>
                  <li onClick={() => addUser(user)}>{user.firstName}</li>
                </ul>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiSelectInput;
