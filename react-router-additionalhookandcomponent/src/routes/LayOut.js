import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const LayOut = ({ authed, logout }) => {
  const navigate = useNavigate();
  console.log(navigate);
  //dashboard로 가려하면 login경로로 간다.
  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/settings">Setting</Link>
        </li>
      </ul>
      {authed && (
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      )}
      <Outlet />
    </div>
  );
};

export default LayOut;
