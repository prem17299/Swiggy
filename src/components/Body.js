import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 3.8
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            name={restaurant.info.name}
            cuisines={restaurant.info.cuisines}
            avgRating={restaurant.info.avgRating}
            costForTwo={restaurant.info.costForTwo}
            deliveryTime={restaurant.info.sla.deliveryTime}
            cloudinaryImageId={restaurant.info.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};
