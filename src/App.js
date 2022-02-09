import Topbar from "./Components/Topbar/Topbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import UserList from "./Pages/UserList/UserList.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./Pages/Home/Home.jsx";

export default function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/users" element={<UserList/>}>
          </Route>
        </Routes>
      </div>
    
 
    </Router>
  );
}
