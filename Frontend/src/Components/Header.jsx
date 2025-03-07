import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import img from "../assets/flipkart logo.png";
import search from "../assets/search.png";

const Header = ({cartItemCount}) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center bg-blue-600 p-4 gap-4 justify-center">
      <div className="flex flex-col items-center sm:items-start">
        <img
          src={img}
          alt="flipkart logo"
          className="w-20 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <a href="#" className="font-semibold">
          Explore <span className="text-orange-400 font-semibold">Plus</span>
        </a>
      </div>

      <div className="flex items-center w-full max-w-md">
        <input
          type="text"
          placeholder="Search for Products, Brands and more"
          className="flex-grow p-2 border-none rounded-l-md focus:outline-none bg-white"
        />
        <img
          src={search}
          alt="search"
          className="w-10 p-2 bg-white cursor-pointer rounded-r-md"
        />
      </div>

      <div>
        {isLoggedIn ? (
          <button
            className="bg-white py-2 px-6 text-red-500 font-semibold rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-white py-2 px-6 text-blue-500 font-semibold rounded-md"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>

      <div
        className="flex items-center text-white font-semibold cursor-pointer"
        onClick={() => navigate("/cart")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-8 h-8 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <span className="text-xl">Cart
          <sup className="text-xl text-yellow-100 p-1">{cartItemCount}</sup>
        </span>
      </div>
    </div>
  );
};

export default Header;
