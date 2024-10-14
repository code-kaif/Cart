import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cartSlice";
import { getProductById, STATUS } from "../redux/apiSlice";
import { ClipLoader } from "react-spinners";
const Page = () => {
  let { id } = useParams();
  const { apisById: data, status } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(id));
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
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-10 px-1 flex justify-center items-center md:flex-row flex-col relative top-10">
        <div className="md:w-1/2 w-full flex justify-center items-center mt-5">
          <img
            src={data.image}
            alt="Book Image"
            className="md:w-[500px] w-[200px] md:h-[400px] rounded-lg object-contain"
          />
        </div>
        <div className="md:w-1/2 w-full flex justify-center flex-col items-start md:space-y-5 space-y-3 my-10">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <h1 className="text-4xl font-bold">{Math.floor(data.price)}$</h1>
          <p className="text-lg w-full">{data.description}</p>

          <div
            onClick={() => handleCart(data)}
            className="md:w-[100%] w-[100%] text-center font-medium cursor-pointer px-5 py-3 rounded-full border-[2px] bg-slate-700 text-white hover:bg-white hover:text-slate-700 duration-200"
          >
            Add to Cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
