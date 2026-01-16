import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { productReducer } from "./productsSlice";


export const strore = configureStore({
    reducer:{
        counterReducer,
        productReducer

    }
})