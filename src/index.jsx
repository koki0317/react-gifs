import "../assets/stylesheets/application.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const rootContainer = document.querySelector("#root");

if (rootContainer) {
  const root = ReactDOM.createRoot(rootContainer);
  root.render(<App />);
}
