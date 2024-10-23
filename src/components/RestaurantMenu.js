import React, { useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

export const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="bg-gray-100 py-6">
      <div className="text-center bg-white shadow-lg rounded-lg p-6 w-3/4 mx-auto">
        <h1 className="font-bold text-3xl mb-4 text-gray-800">{name}</h1>
        <p className="text-lg font-semibold text-gray-600">
          Cuisines: {cuisines?.join(", ")}
        </p>
        <p className="text-lg font-semibold text-gray-600">
          Average Cost for Two: ₹ {costForTwo / 100}
        </p>
      </div>

      <div className="w-3/4 mx-auto mt-6 bg-white rounded-lg shadow-lg p-6">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <RestaurantCategory
              key={index}
              data={category.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() =>
                setShowIndex(index === showIndex ? null : index)
              }
            />
          ))
        ) : (
          <p className="text-center text-red-500 font-bold">Currently Closed</p>
        )}
      </div>
    </div>
  );
};
