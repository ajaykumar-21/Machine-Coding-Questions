import React, { useEffect, useRef, useState } from "react";
import style from "./Practics.module.css";

const Practics = () => {
  const [user, setUser] = useState({
    name: "",
    gender: "",
    mobile: "",
  });
  const [userList, setUserList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserList((prevList) => [...prevList, user]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(userList);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter your full name"
        />{" "}
        <input
          type="text"
          name="gender"
          onChange={handleChange}
          placeholder="Enter your Gender"
        />{" "}
        <input
          type="number"
          name="mobile"
          onChange={handleChange}
          placeholder="Enter your mobile number"
        />
        <button type="submit">submit</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {userList &&
              userList.map((user) => (
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.gender}</td>
                  <td>{user.mobile}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Practics;
