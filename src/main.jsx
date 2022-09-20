import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import styles from "./style";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components/index/components.index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <App className={`${styles.boxWidth}`} />
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);
