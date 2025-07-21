import { useEffect, useState } from "react";
import styles from "./Practics.module.css";

function Practics() {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  console.log(totalPage);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const result = await res.json();
      const total = Math.ceil(result.length / 5);
      setTotalPage(total);
      setEmployees(result);
    };
    fetchdata();
  }, []);

  const handleNext = () => {
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const start = (currentPage - 1) * 5;
  const end = start + 5;
  const totalEmployees = employees.slice(start, end);

  return (
    <div className={styles.tableContainer}>
      <div>
        <h1>Employees Data List</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>role</th>
              </tr>
            </thead>
            <tbody>
              {totalEmployees &&
                totalEmployees.map((employee) => (
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
    </div>
  );
}

export default Practics;
