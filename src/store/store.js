import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Slices/todoSlice"

const store = configureStore({
    reducer : {
       todos : todoSlice
    }
})

export default store