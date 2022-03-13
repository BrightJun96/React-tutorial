import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import ActiveLink from "../ActiveLink";
const LayOut = ({ auth }) => {
  const { authed, login, logout } = auth;

  const navigate = useNavigate();

  const containerStyle = {
    padding: "1rem",
  };

  const location = useLocation();

  return (
    <div style={containerStyle}>
      <h1>Authentication Video Streaming Example</h1>
      <ul>
        <li>
          <ActiveLink to="/" state={location.pathname}>
            Home
          </ActiveLink>
        </li>
        <li>
          <ActiveLink to="/about" state={location.pathname}>
            About
          </ActiveLink>
        </li>
        <li>
          <ActiveLink to="/videos" state={location.pathname}>
            Videos
          </ActiveLink>
        </li>
        <li>
          <ActiveLink to="/configuration" state={location.pathname}>
            Configuration
          </ActiveLink>
        </li>
        <li>
          <ActiveLink to="/login" state={location.pathname}>
            Login
          </ActiveLink>
        </li>
      </ul>

      {authed ? <h2>State : Log-in</h2> : <h2>State : Log-out</h2>}
      {authed && (
        <div>
          <br />
          <button onClick={() => logout().then(() => navigate("/login"))}>
            Log-out
          </button>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default LayOut;
