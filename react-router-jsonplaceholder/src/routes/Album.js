import React from "react";

const Album = ({ item }) => {
  const { userId, id, title } = item;
  return (
    <div style={{ padding: "1rem", width: "300px", border: "1px solid black" }}>
      <h1>userId : {userId}</h1>
      <h1>ID : {id}</h1>
      <p>Title : {title}</p>
    </div>
  );
};

export default Album;
