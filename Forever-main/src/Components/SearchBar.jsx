import { assets } from "../assets/assets";
import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();

  // Determine visibility based on the current route
  const isVisible = showSearch && location.pathname.includes("collection");

  return isVisible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
        />
        <img
          src={assets.search_icon}
          className="w-4"
          alt="Search Icon"
          aria-hidden="true"
        />
        <img
          src={assets.cross_icon}
          className="inline w-3 cursor-pointer"
          alt="Close Search"
          onClick={() => setShowSearch(false)}
          aria-label="Close Search"
        />
      </div>
    </div>
  ) : null;
}

export default SearchBar;
