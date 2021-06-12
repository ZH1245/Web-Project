import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyLayout from "./layout/MyLayout";
import MyBox from "./components/MyBox";
import { Container, Grid } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <MyLayout />
    <Grid container style={{ display: "flex", flexDirection: "row" }}>
      <MyBox title="Galaxy A51" price="40,000" />
      <MyBox />
      <MyBox />
      <MyBox />
      <MyBox />
      <MyBox />
    </Grid> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
