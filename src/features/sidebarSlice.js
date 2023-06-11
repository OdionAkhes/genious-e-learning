/** @format */

// src/features/sidebarSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isSidebarOpen: false
}

const sidebarSlice = createSlice({
  name: "sidebar",
 initialState,
  reducers: {
      
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    changeActiveLink: (state, action) => action.payload,
  }
  
});

export const { toggleSidebar, changeActiveLink } = sidebarSlice.actions;


export default sidebarSlice.reducer;
