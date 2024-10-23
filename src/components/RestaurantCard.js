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
    <div className="m-3 p-4 w-[250px] h-[350px] bg-white hover:bg-gray-50 rounded-lg shadow-lg transition-all duration-300">
      <img
        className="p-2 w-full h-[140px] object-cover rounded-t-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-2">
        <h3 className="font-bold text-lg py-2 mb-4 text-gray-800 overflow-hidden h-[50px] leading-tight">
          {name}
        </h3>

        <p className="text-sm text-gray-600 truncate mb-2">
          {cuisines.join(", ")}
        </p>

        <div className="flex justify-between items-center text-sm font-medium text-gray-700 mb-2 ">
          <span className="bg-green-600 text-white py-2 px-2 rounded-lg">
            {avgRating} ⭐
          </span>

          <span>{deliveryTime} mins</span>
        </div>

        <div className="text-gray-600 text-sm py-2">
          <span>Cost for Two: ₹{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export const withComponentLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white text-xs py-1 px-2 rounded-lg top-2 left-2">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
