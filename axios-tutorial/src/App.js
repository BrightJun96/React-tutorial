import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List";
import Category from "./components/Category";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [data, setData] = useState(null);
  const categorys = [
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];
  async function axiosData(url) {
    const response = await axios.get(url);
    const data = await response.data.articles;
    setData(data);
    console.log(data);
  }
  useEffect(() => {
    console.log("render");
    axiosData(
      "https://newsapi.org/v2/top-headlines?country=kr&apiKey=c1976fb1af424f54b11a305ae52a6b26"
    );
  }, [setData]);
  return (
    <div>
      <h1>Korean News</h1>
      <Category categorys={categorys} />
      {data === null ? (
        <h2>Loading...</h2>
      ) : (
        <Routes>
          {categorys.map((category) => {
            return <Route path={category} element={<List data={data} />} />;
          })}
        </Routes>
      )}
    </div>
  );
};

export default App;
