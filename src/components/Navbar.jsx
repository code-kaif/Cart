import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <header className="h-[10vh] flex justify-between items-center border-b-2 border-gray-300 sticky top-0 bg-white z-50">
      <h1 className="font-bold text-2xl md:text-3xl">ShopingCart</h1>
      <nav className="flex space-x-6">
        <Link to={"/"} className="font-medium text-xl">
          Home
        </Link>
        <Link to={"/cart"} className="flex">
          <FaShoppingCart size={24} />{" "}
          <sub className="font-medium px-1">{cart.length}</sub>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
