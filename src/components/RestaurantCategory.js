import React from "react";
import { ItemList } from "./ItemList";
export const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 rounded-lg shadow-lg p-4 mx-auto bg-gray-50 my-4">
        <div
          className="flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards?.length})
          </span>
          <span>🔻</span>
        </div>
        {showItems && <ItemList data={data.itemCards} />}
      </div>
    </div>
  );
};
