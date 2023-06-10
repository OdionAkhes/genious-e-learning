import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { changeActiveLink } from "../../src/features/sidebarSlice"

const navLinks = ["home"]
const Sidebar = () => {


  return (
    <aside className="h-screen p-6">
      <div>
        <div>Logo</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/discover">Discover</Link>
          </li>
          <li>
            <Link to="/help-support">Help & Support</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar