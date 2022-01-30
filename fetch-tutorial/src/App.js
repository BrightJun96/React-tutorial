import React, { useEffect, useState } from "react";
import List from "./components/List";

const App = () => {
  const [data, setDate] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const json = await response.json();
      setDate(json);
    }

    fetchData();
    console.log("render");
  }, [setDate]);

  return (
    <div>
      <h1>News</h1>
      {data === null ? (
        <h2>Loading...</h2>
      ) : (
        data !== null && <List data={data} />
      )}
    </div>
  );
};

export default App;
