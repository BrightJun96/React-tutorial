import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = ({ auth }) => {
  const { authed, login, logout } = auth;

  const location = useLocation();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => login()}>login</button>
      {authed && <Navigate to={location.state || "/"} />}
    </div>
  );
};

export default Login;
