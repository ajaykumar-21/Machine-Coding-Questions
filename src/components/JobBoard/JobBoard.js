import axios from "axios";
import React, { useState, useEffect } from "react";

const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";

function JobBoard() {
  const [jobIds, setJobIds] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIdsAndData = async () => {
      try {
        const res = await axios.get(`${API_ENDPOINT}/jobstories.json`);
        const ids = res.data.slice(0, 10); // Fetch only first 10 for optimization
        setJobIds(ids);

        const listItems = await Promise.all(
          ids.map((id) =>
            axios.get(`${API_ENDPOINT}/item/${id}.json`).then((res) => res.data)
          )
        );

        setItems(listItems);
      } catch (error) {
        console.error("Error fetching job data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIdsAndData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>Title: {item.title}</div>
      ))}
    </div>
  );
}

export default JobBoard;
