import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./JobBoard.module.css";

const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";
const JOBS_PER_PAGE = 10;

function JobBoard() {
  const [jobIds, setJobIds] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentJob, setCurrentJob] = useState(0);

  useEffect(() => {
    const fetchIdsAndData = async () => {
      try {
        const res = await axios.get(`${API_ENDPOINT}/jobstories.json`);
        const ids = res.data.slice(
          currentJob * JOBS_PER_PAGE,
          currentJob * JOBS_PER_PAGE + JOBS_PER_PAGE
        ); // Fetch only first 10 for optimization
        setJobIds(ids);

        const listItems = await Promise.all(
          ids.map((id) =>
            axios.get(`${API_ENDPOINT}/item/${id}.json`).then((res) => res.data)
          )
        );

        setItems([...items, ...listItems]);
      } catch (error) {
        console.error("Error fetching job data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIdsAndData();
  }, [currentJob]);

  const handleMoreJobs = () => {
    setCurrentJob(currentJob + 1);
  };
  console.log(items);

  return (
    <div className={styles.container}>
      <h2>Job Board</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className={styles.wrapper}>
              <h2>
                <a
                  href={item.url}
                  alt={item.title}
                  target="_blank"
                  rel="noreferrer"
                  className={item.url ? "" : "inactiveLink"}
                >
                  {item.title}
                </a>
              </h2>
              <span>
                By : {item.by} . {new Date(item.time * 1000).toLocaleString()}
              </span>
            </div>
          ))}
          <button className={styles.btn} onClick={handleMoreJobs}>
            Show More Jobs
          </button>
        </div>
      )}
    </div>
  );
}

export default JobBoard;
