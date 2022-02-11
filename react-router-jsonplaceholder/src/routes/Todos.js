import React, { useEffect } from "react";
import Todo from "./Todo";

const Todos = ({ data, axiosData }) => {
  useEffect(() => {
    axiosData("https://jsonplaceholder.typicode.com/todos");
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
          return <Todo key={item.id} item={item} />;
        })}
    </div>
  );
};

export default Todos;
