import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import AppMain from "./AppMain";
import Youtube from "./service/youtube";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
