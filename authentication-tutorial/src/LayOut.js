import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = ({ auth }) => {
  const navigate = useNavigate();

  const { authed, logout } = auth;

  const handleLogout = () => {
    logout().then(() => navigate("/login"));
  };
  return (
    <div>
      <h1>Auth Example</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      {authed && <button onClick={handleLogout}>Logout</button>}

      <Outlet />
    </div>
  );
};

export default Layout;
