import React, { useState } from "react";
import useFetch from "./useFetch";

const Fetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [extractDataFromApi] = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    "POST",
    {
      title: "foo",
      body: "bar",
      userId: 1,
    }
  );

  const fetched = () => {
    setLoading(true);
    extractDataFromApi()
      .then((actualData) => {
        // console.log(actualData);
        setData(actualData);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  console.log(data);
  return (
    <div>
      <h2>Fetch Data</h2>
      {loading ? <p>Loading...</p> : ""}

      <button onClick={fetched}>Fetch Data</button>
    </div>
  );
};

export default Fetch;
