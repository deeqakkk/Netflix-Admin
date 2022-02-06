import Topbar from "./Components/Topbar/Topbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Home from "./Pages/Home/Home.jsx";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
       <Home/>
      </div>{" "}
    </div>
  );
}
