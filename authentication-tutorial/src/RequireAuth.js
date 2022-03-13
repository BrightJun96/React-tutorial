import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children, auth }) => {
  const { authed } = auth;
  const location = useLocation();
  console.log(location);
  return authed === true ? (
    children
  ) : (
    <Navigate to="/login" state={{ path: location.pathname }} />
  );
};

export default RequireAuth;
