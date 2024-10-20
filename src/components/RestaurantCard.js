import { CDN_URL } from "../utils/constants";
export const RestaurantCard = ({
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  }) => {
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>Cuisines: {cuisines.join(", ")}</h4>
        <h4>Average Rating: {avgRating} ⭐</h4>
        <h4>Cost for Two: {costForTwo}</h4>
        <h4>Delivery Time: {deliveryTime} mins</h4>
      </div>
    );
  };