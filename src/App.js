import Topbar from "./Components/Topbar/Topbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import UserList from "./Pages/UserList/UserList.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./Pages/Home/Home.jsx";
import User from "./Pages/UserPage/User.jsx";
import NewUser from "./Pages/NewUser/NewUser.jsx";
import ProductList from "./Pages/ProductList/ProductList.jsx";
import Product from "./Pages/Product/Product.jsx";
import NewProduct from "./Pages/NewProduct/NewProduct.jsx";

export default function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userID" element={<User />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/Products" element={<ProductList />}></Route>
          <Route path="/Product/:productID" element={<Product />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
