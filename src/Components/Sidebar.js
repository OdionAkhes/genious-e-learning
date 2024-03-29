/** @format */

// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveLink, toggleSidebar } from "../features/sidebarSlice";
import Logo from "./Logo";
import Icon from "./Icon";
import { useMediaQuery } from "react-responsive";

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
  const activeLink = useSelector((state) => state.sidebar.sidebar.activeLink);
  const isSidebarOpen = useSelector(
    (state) => state.sidebar.sidebar.isSidebarOpen
  );
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const handleLinkClick = (link) => {
    dispatch(changeActiveLink(link));
    // Close sidebar on small screen when a link is clicked

    if (isSmallScreen) {
      dispatch(toggleSidebar());
    }
  };

  // If sidebar is not open and screen is not small, return null
  // or if screen is small and sidebar is not open, return null


  return (
    <aside
      className={`fixed top-0 h-screen text-sm w-56 bg-gradient-custom text-white transform transition-transform duration-500 ease-in-out ${
        !isSidebarOpen || isSmallScreen ? "-translate-x-full" : "translate-x-0"
      } z-50 `}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="">
          <div className="p-4 flex flex-col items-center space-y-4 mb-6">
            {isSmallScreen && (
              <button
                className="absolute top-1.5 right-2 text-4xl"
                onClick={() => dispatch(toggleSidebar())}
              >
                ×
              </button>
            )}
            <Logo />
          </div>
          <ul className=" px-2 space-y-4">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`flex items-center space-x-2 p-3 rounded-lg transition-transform duration-200 ${
                  link.name === activeLink
                    ? "bg-white bg-opacity-10 translate-x-1"
                    : ""
                }`}
              >
                <Icon iconName={link.icon} />
                <NavLink
                  aria-label={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.name)}
                  className="transition-all duration-200"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <ul className="space-y-6 p-4 mb-4">
          {bottomLinks.map((link) => (
            <li
              key={link.name}
              className={`flex items-center space-x-2 p-3 rounded-lg transition-transform duration-200 ${
                link.name === activeLink
                  ? "bg-white bg-opacity-10 translate-x-1"
                  : ""
              }`}
            >
              <Icon iconName={link.icon} />
              <NavLink
                aria-label={link.name}
                to={link.path}
                className="transition-all duration-200"
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
