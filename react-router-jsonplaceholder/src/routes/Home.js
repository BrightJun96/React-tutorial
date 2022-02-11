import React from "react";
import { Outlet } from "react-router";
import Category from "../components/Category";

const Home = () => {
  return (
    <div style={{}}>
      <h1>JsonPlaceholder</h1>
      <Category />
      <hr />
      <Outlet />
    </div>
  );
};

export default Home;
