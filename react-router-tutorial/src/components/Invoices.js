import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import QueryNavLink from "./QueryNavLink";
import { getInvoices } from "../data/data";
const Invoices = () => {
  let invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        <input
          value={searchParams.get("filter") || ""}
          onChange={(e) => {
            const filter = e.target.value;
            if (filter) setSearchParams({ filter });
            else setSearchParams({});
          }}
        />
        {invoices
          .filter((invoice) => {
            const filter = searchParams.get("filter");
            if (!filter) return true;
            const name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => {
            return (
              <QueryNavLink
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </QueryNavLink>
            );
          })}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
