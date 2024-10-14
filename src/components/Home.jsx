import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { getProducts, STATUS } from "../redux/apiSlice";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const { apis: product, status } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const handleCart = (prod) => {
    dispatch(add(prod));
  };
  if (status == STATUS.loading) {
    return (
      <div className="h-[90vh] flex justify-center items-center flex-col space-y-2">
        <ClipLoader />
        <h1 className="font-semibold text-4xl">Loading</h1>
      </div>
    );
  }
  return (
    <div className="w-full flex justify-around items-center flex-wrap">
      {product.map((item) => (
        <div key={item.id} className="w-[20rem] h-[20rem] md:h-[25rem] my-5">
          <img
            src={item.image}
            alt=""
            className="h-[60%] w-[100%] object-contain"
          />
          <div className="space-y-4">
            <Link to={`/${item.id}`}>
              <p className="font-medium cursor-pointer hover:underline text-xl px-4 whitespace-nowrap overflow-hidden name">
                {item.title}
              </p>
            </Link>

            <div className="flex justify-between items-center px-4 mt-3">
              <div className="text-xl font-medium">
                {Math.floor(item.price)}$
              </div>
              <div className="flex items-center text-xl font-medium">
                {item.rating.rate} <FaStar />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={() => handleCart(item)}
                className="w-[90%] px-3 py-2 md:py-4 hover:bg-slate-800 duration-300 bg-black text-white font-medium rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
