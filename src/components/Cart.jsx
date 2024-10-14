import React from "react";
import { AiFillDelete } from "react-icons/ai";
import Empty from "./Empty";
import { useDispatch, useSelector } from "react-redux";
import { dic, inc, remove, removeAll } from "../redux/cartSlice";

const Cart = ({ cart }) => {
  const dispatch = useDispatch();
  let sum = 0;
  cart.forEach((item) => {
    sum += item.price * item.quantity;
  });
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  const handleRemoveAll = () => {
    dispatch(removeAll());
  };
  return (
    <div className="h-full w-full">
      <div className="min-h-[74vh]">
        <div className="flex justify-between items-center my-5">
          <h1 className="text-2xl font-bold">Cart</h1>

          <button
            onClick={handleRemoveAll}
            className="bg-red-500 text-white font-medium px-3 py-2 rounded-md"
          >
            Clear Cart
          </button>
        </div>

        {cart.length == 0 ? (
          <Empty />
        ) : (
          cart.map((item) => (
            <div key={item.id} className="w-[100%] h-[15vh]">
              <div className="flex justify-between items-center px-5 mt-1">
                <img
                  src={item.image}
                  alt=""
                  className="md:w-[5%] w-[14%] object-contain"
                />
                <div className="font-medium text-xl w-[50%]">
                  <p className="whitespace-nowrap overflow-hidden name">
                    {item.title}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-xl">
                    {Math.floor(item.price)}$
                  </p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500"
                >
                  <AiFillDelete size={24} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="md:text-2xl text-xl font-bold my-5">
          Total Amount : {Math.floor(sum)}$
        </div>
        <button className="bg-green-500 text-white px-8 md:px-10 py-2 rounded-md font-medium">
          Pay
        </button>
      </div>
    </div>
  );
};

export default Cart;
