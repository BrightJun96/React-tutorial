import React, { useEffect } from "react";
import Album from "./Album";
const Albums = ({ axiosData, data }) => {
  useEffect(() => {
    axiosData("https://jsonplaceholder.typicode.com/albums");
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {data &&
        data.map((item) => {
          return <Album key={item.id} item={item} />;
        })}
    </div>
  );
};

export default Albums;
