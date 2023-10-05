import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
//レンダリング
root.render(
  //warningを出してくれるモード
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
