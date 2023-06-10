import { createSlice } from "@reduxjs/toolkit"

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: "home",
    reducers: {
        changeActiveLink: (state,action) => action.payload
    }
})

export const { changeActiveLink } = sidebarSlice.actions

export default sidebarSlice.reducer;