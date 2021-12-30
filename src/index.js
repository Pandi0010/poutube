import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import AppMain from "./AppMain";
import Youtube from "./service/youtube";
import Auth from "./routes/Auth";
import router from "./components/Router";
import { Router } from "workbox-routing";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
