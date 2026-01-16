import { createSlice } from "@reduxjs/toolkit";


const counterSlice= createSlice({
    name:'counterReducer',
    initialState:{
        counter:0,
        user:'mohamed'
    },
    reducers:{
        increase:()=>console.log('increase'),
        decrease:()=>console.log('decrease'),
      
    }
})


export const counterReducer = counterSlice.reducer;

export const {increase ,decrease} = counterSlice.actions;
