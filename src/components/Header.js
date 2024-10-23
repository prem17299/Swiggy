import { headerLogoUrl } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
export const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center border border-black h-20 bg-blue-200 shadow-lg">
      <div className="flex item-center">
        <img className="w-20" src={headerLogoUrl} />
      </div>
      <div className="nav-items">
        <ul className="flex m-4 p-4">
          <li className="px-4">Online status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 hover:bg-blue-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:bg-blue-400">
            <Link to="/about"> About us</Link>
          </li>
          <li className="px-4 hover:bg-blue-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:bg-blue-400">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">Cart -({cartItems.length} items) </Link>
          </li>
          <button
            className="mx-4 cursor-pointer hover:bg-blue-400 font-bold text-lg"
            onClick={() => {
              btnName === "login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 hover:bg-blue-400 font-bold text-lg">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};
