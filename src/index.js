import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import NavBar from "./NavBar";
import App from "./App";
import "./index.css";
var element = (
  <div>
    {/* <button className="btn btn-danger">Hello World</button> */}
    {/* <NavBar /> */}
    <App />
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
// ReactDOM.render(<NavBar />, document.getElementById("root"));
console.log(element);
console.log("HOLA mundo");
console.log("HOLA mundo MIJAIL");
