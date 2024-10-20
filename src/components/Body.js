import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { useListOfRestaurants } from "../hooks/useListOfRestaurants";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {
    listOfRestaurants,
    filteredListOfRestaurants,
    setFilteredListOfRestaurants,
  } = useListOfRestaurants();

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks Like Your Offline!! , Your Internet is down</h1>;

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredListOfRestaurants(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard
              name={restaurant.info.name}
              cuisines={restaurant.info.cuisines}
              avgRating={restaurant.info.avgRating}
              costForTwo={restaurant.info.costForTwo}
              deliveryTime={restaurant.info.sla.deliveryTime}
              cloudinaryImageId={restaurant.info.cloudinaryImageId}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
