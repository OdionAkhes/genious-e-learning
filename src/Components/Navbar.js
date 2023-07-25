/** @format */

import React from "react";
import {  useDispatch } from "react-redux";
import { toggleSidebar } from "../features/sidebarSlice";
import { setSearchTerm } from "../features/actions"
import {
  FiSearch,
  FiBell,
  FiShoppingCart,

} from "react-icons/fi";
import profileImage from "../assets/avatar.png";

function Navbar() {
  const dispatch = useDispatch()
 


    const handleSearchChange = (event) => {
      dispatch(setSearchTerm(event.target.value));
    };



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
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
          >
            <path
              d="M1.11839e-07 1.29212C1.41649e-07 0.951132 0.135609 0.624104 0.376995 0.382986C0.618382 0.141868 0.945773 0.00641026 1.28714 0.00641029L11.5843 0.00641119C11.7633 -0.0115334 11.944 0.00819173 12.1149 0.0643126C12.2858 0.120434 12.443 0.211703 12.5764 0.332239C12.7097 0.452775 12.8164 0.599901 12.8893 0.764125C12.9623 0.928348 13 1.10603 13 1.2857C13 1.46537 12.9623 1.64305 12.8893 1.80727C12.8164 1.97149 12.7097 2.11862 12.5764 2.23915C12.443 2.35969 12.2858 2.45096 12.1149 2.50708C11.944 2.5632 11.7633 2.58293 11.5843 2.56498L1.28714 2.56498C0.947991 2.565 0.622538 2.43131 0.381517 2.19296C0.140498 1.95462 0.0033923 1.63088 1.11839e-07 1.29212Z"
              fill="#2D405A"
            />
            <path
              d="M2.01919e-06 9.00642C2.049e-06 8.66542 0.136284 8.3384 0.37887 8.09728C0.621456 7.85616 0.950474 7.7207 1.29354 7.7207L24.5773 7.7207C24.7571 7.70276 24.9388 7.72248 25.1105 7.77861C25.2822 7.83473 25.4402 7.926 25.5743 8.04653C25.7083 8.16707 25.8155 8.31419 25.8888 8.47842C25.9621 8.64264 26 8.82032 26 8.99999C26 9.17966 25.9621 9.35734 25.8888 9.52156C25.8155 9.68579 25.7083 9.83291 25.5743 9.95345C25.4402 10.074 25.2822 10.1653 25.1105 10.2214C24.9388 10.2775 24.7571 10.2972 24.5773 10.2793L1.29354 10.2793C0.952703 10.2793 0.625631 10.1456 0.383413 9.90725C0.141197 9.66891 0.00341042 9.34518 2.01919e-06 9.00642Z"
              fill="#2D405A"
            />
            <path
              d="M1.42985 15.435C1.24909 15.4171 1.06653 15.4368 0.893952 15.4929C0.721373 15.549 0.562605 15.6403 0.427883 15.7608C0.293162 15.8814 0.185482 16.0285 0.111784 16.1927C0.038088 16.3569 1.15722e-05 16.5346 1.15565e-05 16.7143C1.15408e-05 16.894 0.0380879 17.0716 0.111784 17.2359C0.185482 17.4001 0.293161 17.5472 0.427883 17.6677C0.562605 17.7883 0.721373 17.8795 0.893951 17.9357C1.06653 17.9918 1.24909 18.0115 1.42985 17.9936L17.0298 17.9936C17.3505 17.9617 17.6478 17.8132 17.8641 17.5768C18.0803 17.3404 18.2 17.033 18.2 16.7143C18.2 16.3955 18.0803 16.0881 17.8641 15.8517C17.6478 15.6154 17.3505 15.4668 17.0298 15.435L1.42985 15.435Z"
              fill="#2D405A"
            />
          </svg>
        </button>
        <div className="relative ">
          <input
            type="search"
            onChange={handleSearchChange}
            placeholder="Search anything"
            className="mx-2 text-[#A6ACBE] py-1 px-2 pl-8 rounded-3xl focus:outline-none lg:w-96  "
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <FiSearch className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-8 mt-4 sm:mt-0 ">
        <button className="bg-[#4C6FFF] text-white rounded-md py-2 px-4 sm:text-xs text-[10px]">
          + Create
        </button>
        <button className="text-black focus:outline-none text-sm relative">
          <FiBell className="h-5 w-5 text-sm text-[#56606D]" />
          <span className=" absolute top-0 right-0 bg-[#4C6FFF] text-white text-[10px] w-[10px] h-[10px] rounded-full flex items-center justify-center">
            9
          </span>
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
            <div className="ml-3 text-gray-700 h-4 w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#56606D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
