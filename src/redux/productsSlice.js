import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllProducts = createAsyncThunk('productsSlice/getAllProducts',async ()=>{
    const {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
    return data
})

const productsSlice = createSlice({
    name:'productsSlice',
    initialState:{
        isLoading:false,
        isError:null,
        products:[]
    },
    extraReducers:builder=>{
        builder.addCase(getAllProducts.pending,(state ,action)=>{
            console.log('loading')
            state.isLoading = true;
            state.isError = false;
        })


        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.products = action.payload
            state.isLoading = false;
            state.isError = null;
        })

        builder.addCase(getAllProducts.rejected,(state,action)=>{
            console.log(action.payload)
            state.isLoading = false;
            state.isError = action.payload;
        })
    }
})

export const productReducer = productsSlice.reducer