import React, { useEffect, useState } from "react";
import { setUserData, getUserData } from "./GetData";

function UserTable() {
  const [users, setUsers] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [userList, setUserList] = useState(getUserData);

  setUserData(userList);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserList((prevList) => [...prevList, users]);
    setUsers({ firstName: "", lastName: "", phone: "" });
    // alert("submitted successfully");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //   console.log(userList);
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            placeholder="Enter your phoen number"
            onChange={handleChange}
          />
          <button type="submit">ADD</button>
        </form>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {userList.length > 0 &&
              userList.map((user, idx) => (
                <tr key={idx}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserTable;
