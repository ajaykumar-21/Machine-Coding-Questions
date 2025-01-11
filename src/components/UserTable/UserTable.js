import React, { useState } from "react";
import { setUserData, getUserData } from "./GetData";
import style from "./UserTable.module.css";
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
    <div className={style.container}>
      <div className={style.formField}>
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
          <div>
            <button type="submit">ADD</button>
          </div>
        </form>
      </div>
      <div className={style.wrapper}>
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
    </div>
  );
}

export default UserTable;
