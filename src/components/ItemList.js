import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

export const ItemList = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  if (!data || data.length === 0) {
    return (
      <div className="text-center font-bold text-red-500 my-4">
        This is out of Stock !! Order Something Else
      </div>
    );
  }

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span className="m-2">₹{item.card.info.price}</span>
            </div>
            <p className="text-xs">
              <span>{item.card.info.description}</span>
            </p>
          </div>
          {item.card.info.imageId && (
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-2 mx-16 rounded-lg shadow-lg bg-black text-white"
                  onClick={() => handleAddItem(item)}
                >
                  +Add
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
