import React, { useState } from "react";
import { ItemList } from "./ItemList";

export const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [subShowIndex, setSubShowIndex] = useState(null);

  const handleClick = () => {
    setShowIndex();
  };

  const handleSubClick = (index) => {
    setSubShowIndex(index === subShowIndex ? null : index);
  };

  return (
    <div>
      <div className="w-6/12 rounded-lg shadow-lg p-4 mx-auto bg-gray-50 my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards?.length || data.categories?.length})
          </span>
          <span>🔻</span>
        </div>

        {showItems &&
          (data["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
            data.categories.map((subcategory, index) => (
              <div key={index} className="border-t mt-4 pt-2">
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => handleSubClick(index)}
                >
                  <span className="font-semibold text-lg">
                    {subcategory.title} ({subcategory.itemCards?.length})
                  </span>
                  <span>🔻</span>
                </div>

                {subShowIndex === index && (
                  <ItemList data={subcategory.itemCards} />
                )}
              </div>
            ))
          ) : (
            <ItemList data={data.itemCards} />
          ))}
      </div>
    </div>
  );
};
