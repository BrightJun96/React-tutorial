import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Users = ({ data, axiosData }) => {
  useEffect(() => {
    axiosData("https://jsonplaceholder.typicode.com/users");
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          width: "350px",
          borderRight: "1px solid black",
        }}
      >
        <h1>User</h1>
        {data &&
          data.map((item) => {
            return (
              <Link
                to={`/users/${item.id}`}
                key={item.id}
                style={{ display: "block" }}
              >
                {item.username}
              </Link>
            );
          })}
      </nav>
      <Outlet />
    </div>
  );
};

export default Users;
