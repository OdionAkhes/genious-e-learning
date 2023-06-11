/** @format */

// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveLink } from "../features/sidebarSlice";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Discover", path: "/discover" },
  { name: "Help & Support", path: "/help-support" },
  { name: "Settings", path: "/settings" },
];

const bottomLinks = [
  { name: "Account", path: "/account" },
  { name: "Logout", path: "/logout" },
]
function Sidebar() {
  const activeLink = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const handleLinkClick = (link) => {
    dispatch(changeActiveLink(link));
  };

  return (
    <aside className="h-screen text-small w-64 flex flex-col justify-between  p-6 bg-gradient-custom text-white">
      <div>
        <div>Logo</div>
        <ul className="space-y-2  px-4">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.path}
                className={link.name === activeLink ? "text-green-500" : ""}
                activeClassName="text-green-500"
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="space-y-2  px-4 mb-4">
          {bottomLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.path}
                className={link.name === activeLink ? "text-green-500" : ""}
                activeClassName="text-green-500"
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
