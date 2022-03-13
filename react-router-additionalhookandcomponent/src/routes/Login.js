import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = ({ login, authed, history }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          login();
          navigate("/dashboard", { replace: true });
        }}
      >
        login
      </button>
      {authed && <Navigate to="/dashboard" />}
    </div>
  );
};

export default Login;
