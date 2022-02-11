import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const Posts = ({ data, axiosData }) => {
  useEffect(() => {
    axiosData("https://jsonplaceholder.typicode.com/posts");
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          display: "block",
          borderRight: "1px solid black",
          padding: "1rem ",
          width: "150px",
        }}
      >
        <h1>Item</h1>
        {data &&
          data.map((item) => {
            return (
              <Link
                style={{ display: "block" }}
                key={item.id}
                to={`/posts/${item.id}`}
              >
                {item.id}
              </Link>
            );
          })}
      </nav>
      <Outlet />
    </div>
  );
};

export default Posts;
