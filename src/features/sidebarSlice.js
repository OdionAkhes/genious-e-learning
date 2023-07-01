/** @format */

// src/features/sidebarSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    isSidebarOpen: false,
    activeLink: "",
  },
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar.isSidebarOpen = !state.sidebar.isSidebarOpen;
    },
    changeActiveLink: (state, action) => {
      state.sidebar.activeLink = action.payload;
    },
  },
});

export const { toggleSidebar, changeActiveLink } = sidebarSlice.actions;
export default sidebarSlice.reducer;
