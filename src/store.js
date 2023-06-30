/** @format */

import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";
import messagesReducer from "./features/messagesSlice";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    messages: messagesReducer,
  },
});
