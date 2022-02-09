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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          {/* <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct /> */}
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );
}
