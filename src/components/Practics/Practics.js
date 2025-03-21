import React, { useEffect, useRef, useState } from "react";
import style from "./Practics.module.css";

const Practics = () => {
  const [employees, setEmployees] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const pages = Math.ceil(data.length / 10);
        setTotalPage(pages);
        setEmployees(data);
      })
      .catch((error) => {
        console.log("Error while fetching the data", error);
        alert("Somthing went wrong");
      });
  }, []);

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * 10;
  const lastIndex = Math.min(startIndex + 10, employees.length);
  const pageData = employees.slice(startIndex, lastIndex);

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {pageData &&
              pageData.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.role}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <button onClick={handleNext} disabled={currentPage === totalPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Practics;
