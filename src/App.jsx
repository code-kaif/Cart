import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Page from "./components/Page";

const App = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="max-w-screen-2xl h-full px-5 md:px-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/:id" element={<Page />} />
      </Routes>
    </div>
  );
};

export default App;
