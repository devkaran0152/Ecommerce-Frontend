import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex justify-between items-center py-5 font-medium relative">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-36" />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {['/', '/collection', '/about', '/contact'].map((path, index) => {
          const names = ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'];
          return (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 ${isActive ? 'text-black' : ''}`
                }
              >
                <p>{names[index]}</p>
                <hr
                  className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${window.location.pathname === path ? 'block' : 'hidden'}`}
                />
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* Right side icons */}
      <div className="flex gap-6 items-center">
        <img
          src={assets.search_icon}
          className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          alt="Search"
          onClick={() => setShowSearch((prev) => !prev)}
          aria-label="Toggle Search"
        />

        <div className="group relative">
          <Link to="/login">
            <img src={assets.profile_icon} alt="Profile" className="w-5 cursor-pointer" />
          </Link>
          <div className="group-hover:block hidden absolute right-0 pt-4 z-10">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-5 cursor-pointer min-w-5"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-20 transition-all duration-300 overflow-hidden sm:hidden ${
          visible ? "w-2/3" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back Icon" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to="/" className="py-2 pl-6 border">
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/collection" className="py-2 pl-6 border">
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/about" className="py-2 pl-6 border">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/contact" className="py-2 pl-6 border">
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
