import { RestaurantCard, withComponentLabel } from "./RestaurantCard";
import { useContext, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { useListOfRestaurants } from "../hooks/useListOfRestaurants";
import { UserContext } from "../utils/UserContext";

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

  const RestaurantCardPromoted = withComponentLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search m-4 p-4">
        <input
          type="text"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-1 bg-green-200 hover:bg-green-400 cursor-pointer m-4 rounded-lg"
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
          className="px-4 py-1 bg-gray-200 hover:bg-gray-400 cursor-pointer mx-24 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <label> UserName: </label>
        <input
          className="border border-black p-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV2 ? (
              <RestaurantCard
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                avgRating={restaurant.info.avgRating}
                costForTwo={restaurant.info.costForTwo}
                deliveryTime={restaurant.info.sla.deliveryTime}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
              />
            ) : (
              <RestaurantCardPromoted
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                avgRating={restaurant.info.avgRating}
                costForTwo={restaurant.info.costForTwo}
                deliveryTime={restaurant.info.sla.deliveryTime}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
