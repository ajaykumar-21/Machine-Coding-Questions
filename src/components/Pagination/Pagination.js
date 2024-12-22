import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [employees, setEmployees] = useState([]);

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
        console.error("Error while fatching data", error);
        alert("Failed to fatch data");
      });
  }, []);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage > 0 && currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * 10;
  const lastIndex = Math.min(startIndex + 10, employees.length);
  const totalPageData = employees.slice(startIndex, lastIndex);

  return (
    <div className={styles.tableContainer}>
      <h1>Employee Data Table</h1>
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
          {totalPageData &&
            totalPageData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
              </tr>
            ))}
        </tbody>
      </table>
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
}

export default Pagination;
