import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { clearItems } from "../redux/slices/cartSlice";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatcher = useDispatch();

  const handleClearCart = () => {
    dispatcher(clearItems());
  };

  return (
    <div className="m-4 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>={" "}
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <h1 className="font-bold text-xl text-red-600">
              Cart is Empty! Please add items to your cart.
            </h1>
          </div>
        ) : (
          <div>
            <ItemList data={cartItems} />

            <div className="flex justify-end mt-6">
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
