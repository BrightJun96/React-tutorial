import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Base from "./Base";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Base />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
