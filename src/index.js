import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// import Home from "./Home";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Body from "./middle/Body";

ReactDOM.render(
  <div>
    <Header /> <Body />,<App />,<Footer />
  </div>,

  document.getElementById("root")
);
