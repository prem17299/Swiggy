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
    <div className="m-3 p-1 w-[250px] h-[400px] bg-gray-200 hover:bg-gray-400 rounded-lg">
      <img
        className="w-[250px] h-[150px] object-cover rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg py-4">{name}</h3>
      <h4>Cuisines: {cuisines.join(", ")}</h4>
      <h4>Average Rating: {avgRating} ⭐</h4>
      <h4>Cost for Two: {costForTwo}</h4>
      <h4>Delivery Time: {deliveryTime} mins</h4>
    </div>
  );
};
