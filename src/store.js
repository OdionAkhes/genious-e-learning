import { configureStore } from "@reduxjs/tooolkit";
const store = configureStore({
    reducer: {
        sidebar: sidebarReducer
    }
})

export default store