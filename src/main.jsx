import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import styles from "./style"
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App className={`${styles.boxWidth}`}/>
    </Router>
  </React.StrictMode>
);
