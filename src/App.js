import Topbar from "./Components/Topbar/Topbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">other pages</div>
      </div>{" "}
    </div>
  );
}
