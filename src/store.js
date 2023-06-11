/** @format */

// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
