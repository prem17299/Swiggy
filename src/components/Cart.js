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
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="font-bold bg-red-500 text-2xl p-4">
            Cart Is Empty !!! Please add items to your cart{" "}
          </h1>
        )}
        {cartItems.length !== 0 && <ItemList data={cartItems} />}
      </div>
    </div>
  );
};
