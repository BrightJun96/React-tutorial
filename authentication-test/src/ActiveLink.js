import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to, state }) => {
  return (
    <NavLink
      to={to}
      state={state}
      style={({ isActive }) => (isActive ? { color: "red" } : null)}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
