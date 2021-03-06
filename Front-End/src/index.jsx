import React from "react";
import ReactDOM from "react-dom";
import "./App/index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import theme from "./InternalTheme.js";
import "font-awesome/css/font-awesome.min.css";
import PageComponent from "./MaterialUI/Components/Page";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(theme)}>
      <PageComponent>
        <App pageTitle={"User Access Review"} />
      </PageComponent>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
