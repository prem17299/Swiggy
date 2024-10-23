import { headerLogoUrl } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center border-b-2 border-gray-200 h-20 bg-white shadow-md px-4">
      <div className="flex items-center">
        <img className="w-16" src={headerLogoUrl} alt="logo" />
      </div>

      <div className="nav-items flex-1">
        <ul className="flex justify-center items-center space-x-8">
          <li className="flex items-center px-2 hover:text-blue-500">
            <AiOutlineHome className="mr-2" />
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center px-2 hover:text-blue-500">
            <AiOutlineInfoCircle className="mr-2" />
            <Link to="/about">About Us</Link>
          </li>
          <li className="flex items-center px-2 hover:text-blue-500">
            <AiOutlinePhone className="mr-2" />
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="flex items-center px-2 hover:text-blue-500">
            <FiShoppingCart className="mr-2" />
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="flex items-center font-bold text-lg px-2 hover:text-blue-500">
            <BsCart3 className="mr-2" />
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <button
          className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
        <span className="font-bold text-gray-700">{loggedInUser}</span>
      </div>
    </div>
  );
};
