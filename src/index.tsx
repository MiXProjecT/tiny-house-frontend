import React from "react";
import ReactDOM from "react-dom";
import { Listings } from "./sections";

ReactDOM.render(
  <React.StrictMode>
    <Listings title="title" />
  </React.StrictMode>,
  document.getElementById("root")
);
