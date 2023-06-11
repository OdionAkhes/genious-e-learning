/** @format */

// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveLink } from "../features/sidebarSlice";
import Logo from "./Logo";
import Icon from "./Icon";

const navLinks = [
  { name: "Home", path: "/", icon: "home" },
  { name: "Discover", path: "/discover", icon: "discover" },
    { name: "Messages", path: "/messages", icon: "message" },
  { name: "Help & Support", path: "/help-support", icon: "help" },

  { name: "Settings", path: "/settings", icon: "settings" },
];

const bottomLinks = [
  { name: "Account", path: "/account", icon: "account" },
  { name: "Logout", path: "/logout", icon: "logout" },
];

function Sidebar() {
  const activeLink = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const handleLinkClick = (link) => {
    dispatch(changeActiveLink(link));
  };

  return (
    <aside className="hidden h-screen text-sm w-64 md:flex  flex-col justify-between bg-gradient-custom text-white">
      <div className="">
        <div className="p-4 flex flex-col items-center space-y-4 mb-6">
          <Logo />
        </div>
        <ul className="w-full px-2 space-y-4">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className={`flex items-center space-x-2 p-3 rounded-lg ${
                link.name === activeLink ? "bg-white bg-opacity-10" : ""
              }`}
            >
              <Icon iconName={link.icon} /> {/* Add Icon component here */}
              <NavLink
                to={link.path}
               
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="space-y-6 p-4 mb-4">
          {bottomLinks.map((link, idx) => (
            <li
              key={idx}
              className={`flex items-center space-x-2 p-2 rounded-lg ${
                link.name === activeLink ? "bg-white bg-opacity-10" : ""
              }`}
            >
              <Icon iconName={link.icon} /> {/* Add Icon component here */}
              <NavLink
                to={link.path}
       
   
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
