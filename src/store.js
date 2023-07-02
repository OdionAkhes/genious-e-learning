/** @format */

import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";
import messagesReducer from "./features/messagesSlice";
import searchReducer from "./features/searchReducer";
import courseReducer from "./features/courseSlice";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    messages: messagesReducer,
    search: searchReducer,
    courses: courseReducer,
  },
});
