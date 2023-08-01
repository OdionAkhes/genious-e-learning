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
  if ((!isSidebarOpen && !isSmallScreen) || (isSmallScreen && !isSidebarOpen)) {
    return null;
  }

  return (
    <aside
      className={`fixed md:sticky top-0 h-screen text-sm w-64 md:flex  flex-col justify-between bg-gradient-custom text-white  transform ease-in-out transition-medium ${
        isSmallScreen && !isSidebarOpen ? "translate-x-full" : "translate-x-0"
      } z-50 ${!isSidebarOpen ? "visibility-hidden" : "visibility-visible"}`}
    >
      <div className="">
        <div className="p-4 flex flex-col items-center space-y-4 mb-6">
          <Logo />
          {isSmallScreen && (
            <button
              className="absolute top-1.5 right-2 text-4xl"
              onClick={() => dispatch(toggleSidebar())}
            >
              ×
            </button>
          )}
        </div>
        <ul className="w-full px-2 space-y-4">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`flex items-center space-x-2 p-3 rounded-lg ${
                link.name === activeLink ? "bg-white bg-opacity-10" : ""
              }`}
            >
              <Icon iconName={link.icon} />
              <NavLink
                aria-label={link.name}
                to={link.path}
                onClick={() => handleLinkClick(link.name)}
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
            className={`flex items-center space-x-2 p-2 rounded-lg ${
              link.name === activeLink ? "bg-white bg-opacity-10" : ""
            }`}
          >
            <Icon iconName={link.icon} />
            <NavLink
              aria-label={link.name}
              to={link.path}
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
