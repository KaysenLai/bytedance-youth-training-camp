import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById("root")
);
reportWebVitals();
