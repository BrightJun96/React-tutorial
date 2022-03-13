import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Videos = ({ auth }) => {
  const { authed, login, logout } = auth;
  const location = useLocation();
  return (
    <div>
      <h1>Videos(protected)</h1>
      {!authed && <Navigate to="/login" state={location.pathname} />}
    </div>
  );
};

export default Videos;
