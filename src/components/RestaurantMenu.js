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
    <div className="text-center border border-solid  bg-slate-300">
      <h1 className="font-bold my-8 text-2xl bg-pink-300 w-6/12 rounded-lg shadow-lg p-4 m-auto my-4">
        {name}
      </h1>
      <p className="font-bold text-lg w-6/12 rounded-lg shadow-lg p-4 m-auto bg-green-300 my-4">
        Cuisines - {cuisines?.join(", ")}
      </p>
      <p className="font-bold text-lg w-6/12 rounded-lg shadow-lg p-4 m-auto bg-green-300 my-4">
        Average Cost for Two - ₹ {costForTwo / 100}
      </p>
      <div className="border border-solid bg-slate-600">
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
          <p className="bg-red-300 font-bold text-lg"> Currently Closed</p>
        )}
      </div>
    </div>
  );
};
