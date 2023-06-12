/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/sidebarSlice";
import {
  FiSearch,
  FiBell,
  FiShoppingCart,
  FiChevronDown,
} from "react-icons/fi";
import profileImage from "../assets/avatar.png";

function Navbar() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <nav className="text-sm py-4 px-6 flex sm:flex-row items-center justify-between">
      <div className="flex items-center space-x-8">
        <button
          className="text-[#2D405A] focus:outline-none"
          onClick={handleToggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div className="relative ">
          <input
            type="text"
            placeholder="Search anything"
            className="mx-2 text-[#A6ACBE] py-1 px-2 pl-8 rounded-3xl focus:outline-none lg:w-96  "
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <FiSearch className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-8 mt-4 sm:mt-0">
        <button className="bg-[#4C6FFF] text-white rounded-md py-2 px-4 text-xs">
          + Create
        </button>
        <button className="text-black focus:outline-none text-sm">
          <FiBell className="h-5 w-5 text-sm text-[#56606D]" />
        </button>
        <button className="text-black focus:outline-none text-sm">
          <FiShoppingCart className="h-5 w-5 text-sm text-[#56606D]" />
        </button>
        <div className="">
          <button className="text-black text-sm flex items-center focus:outline-none">
            <img
              src={profileImage}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3 text-left flex flex-col">
              <span className="text">Carl Esquer</span>
              <span className="text-xs text-[#767278]">Level 3</span>
            </div>
            <FiChevronDown className="ml-3 text-gray-700 h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
