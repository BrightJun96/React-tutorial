import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ auth }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { login } = auth;
  console.log(state);
  const handleLogin = () => {
    login().then(() => {
      navigate(state?.path || "/dashboard");
    });
  };
  return (
    <div>
      <h1>Login(Public)</h1>
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default Login;
