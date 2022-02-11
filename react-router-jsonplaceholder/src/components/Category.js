import React from "react";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="posts">Posts</Link>
      <Link to="albums">Albums</Link>
      <Link to="todos">Todos</Link>
      <Link to="users">Users</Link>
    </div>
  );
};

export default Category;
