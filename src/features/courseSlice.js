/** @format */

// slice.js
import { createSlice } from "@reduxjs/toolkit";
import courses from "../data/courses";

const courseSlice = createSlice({
  name: "courses",
  initialState: courses,
  reducers: {

  },
});

export default courseSlice.reducer;
