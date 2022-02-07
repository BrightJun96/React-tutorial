import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Book Keeper</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/">Home</Link>|<Link to="invoices">Invoices</Link>|
        <Link to="expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
