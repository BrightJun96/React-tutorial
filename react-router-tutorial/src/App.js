import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Invoices from "./components/Invoices";
import Expenses from "./components/Expenses";
import Nomatch from "./components/Nomatch";
import Invoice from "./components/Invoice";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <div style={{ padding: "1rem" }}>
                  <h2>Select an Invoice</h2>
                </div>
              }
            />
            <Route path="/invoices/:invoiceId" element={<Invoice />} />
          </Route>
          <Route path="expenses" element={<Expenses />} />
          <Route path="*" element={<Nomatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
