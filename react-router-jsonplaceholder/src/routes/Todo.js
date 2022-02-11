import React from "react";

const Todo = ({ item }) => {
  const { userId, id, title, completed } = item;
  return (
    <div style={{ padding: "1rem", width: "300px", border: "1px solid black" }}>
      <h1>userId : {userId}</h1>
      <h1>ID : {id}</h1>
      <p>Title : {title}</p>
      <h2>completed : {JSON.stringify(completed)}</h2>
    </div>
  );
};

export default Todo;
